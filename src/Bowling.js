const score = (frames) => {

  const frameCount = () => {
    return frames.length
  }

  const isStrike = (idx) => {
    if (idx > frameCount() - 1) { return false }
    return (frames[idx][0] === 10)
  }

  const isNextStrike = (idx) => {
    return (isStrike(idx+1))
  }

  const isSpare = (idx) => {
    return ((frames[idx][0] + frames[idx][1] === 10) && !isStrike(idx))
  }

  const frameFirst = (idx) => {
    return frames[idx][0]
  }

  const frameSecond = (idx) => {
    return frames[idx][1]
  }

  const frameScore = (idx) => {
    return frames[idx].reduce( (prev, curr) => prev + curr )
  }

  const nextTwoScores = (idx) => {
    return 10 + frames[idx + 2][0]
  }

  const totalScore = (idx) => {
    var sum = 0
    if (isStrike(idx) || isSpare(idx)) {
      sum = sum + calculateBonus(idx)
    }
    return sum + frameScore(idx)
  }

  const calculateBonus = (idx) => {
    return (isStrike(idx) ? calcStrikeBonus(idx) : calcSpareBonus(idx))
  }

  const calcSpareBonus = (idx) => {
    return frames[idx+1][0]
  }

  const calcStrikeBonus = (idx) => {
    if (isNextStrike(idx) && idx === 8) {
      return 10 + frames[9][1]
    } else {
      return ((isNextStrike(idx) && idx !== 8) ?
               calcDoubleStrike(idx) : calcSingleStrike(idx))
    }
  }

  const calcDoubleStrike = (idx) => {
    return nextTwoScores(idx)
  }

  const calcSingleStrike = (idx) => {
    if (idx < frameCount() - 1) {
      return ((frames[idx+1].length > 1) ?
               frames[idx+1][0] + frames[idx+1][1] : frames[idx+1][0])
    } else {
      return 0
    }
  }


  const fullScore = () => {
    var sum = 0
    for (i = 0; i < frameCount(); i++) {
      sum = sum + totalScore(i)
    }
    return sum
  }
  return fullScore()
}

// console.log(score([[2, 3], [3, 4], [7, 2]]))
