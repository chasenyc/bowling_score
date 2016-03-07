describe("Score", function() {

  it("should be able to handle a basic 3 frame game", function() {
    expect(score([[2, 3], [3, 4], [7, 2]])).toEqual(21);
  });

  it("should be able to handle an incomplete set", function() {
    expect(score([[2, 3], [3, 4], [7]])).toEqual(19);
  });

  it("should be able to handle an average game", function() {
    var normalGame = [[0,9],[2,5],[10],[0,2],[2,8],[0,5],[10],[6,2],[10],[4,5]]
    expect(score(normalGame)).toEqual(99);
  });

  it("should be able to handle a perfect game", function() {
    var perfectGame = [[10],[10],[10],[10],[10],[10],[10],[10],[10],[10,10,10]]
    expect(score(perfectGame)).toEqual(300);
  });

  it("should be able to handle a gutter game", function() {
    var gutterGame = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
    expect(score(gutterGame)).toEqual(0);
  });

});
