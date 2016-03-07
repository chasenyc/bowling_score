# Bowling Score

Basic code to score bowling games. Handles 10 frame games as well as incomplete games. Limited testing done with Jasmine to ensure a few basic cases. I did not go overboard to address edge cases such as invalid numbers/frames.

To run tests just open `SpecRunner.html`

uncomment line 86 in Bowling.js:
```
console.log(score([[2, 3], [3, 4], [7, 2]]))
```
and run `node src/Bowling.js`
