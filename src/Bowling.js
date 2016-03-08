const score = (frames) => {
  var sum = 0
  for (i = 0; i < frames.length; i++) {
    sum = sum + totalScore(frames, i)
  }
  return sum
}

const isStrike = (frames, idx) => {
  if (idx > frames.length - 1) { return false }
  return (frames[idx][0] === 10)
}

const isNextStrike = (frames, idx) => {
  return (isStrike(frames, idx+1))
}

const isSpare = (frames, idx) => {
  return ((frames[idx][0] + frames[idx][1] === 10) && !isStrike(frames, idx))
}

const frameScore = (frames, idx) => {
  return frames[idx].reduce( (prev, curr) => prev + curr )
}

const nextTwoScores = (frames, idx) => {
  return 10 + frames[idx + 2][0]
}

const totalScore = (frames, idx) => {
  return frameScore(frames, idx) + calculateBonus(frames, idx)
}

const calculateBonus = (frames, idx) => {
  if (isStrike(frames, idx)) {
    return calcStrikeBonus(frames, idx)
  } else if (isSpare(frames, idx)) {
    return calcSpareBonus(frames, idx)
  } else {
    return 0
  }
}

const calcSpareBonus = (frames, idx) => {
  return frames[idx+1][0]
}

const calcStrikeBonus = (frames, idx) => {
  if (isNextStrike(frames, idx) && idx === 8) {
    return 10 + frames[9][1]
  } else {
    if (isNextStrike(frames, idx) && idx !== 8) {
      return calcDoubleStrike(frames, idx)
    } else {
      return calcSingleStrike(frames, idx)
    }
  }
}

const calcDoubleStrike = (frames, idx) => {
  return nextTwoScores(frames, idx)
}

const calcSingleStrike = (frames, idx) => {
  if (idx < frames.length - 1) {
    return ((frames[idx+1].length > 1) ?
             frames[idx+1][0] + frames[idx+1][1] : frames[idx+1][0])
  } else {
    return 0
  }
}

// console.log(score([[2, 3], [3, 4], [7, 2]]))
