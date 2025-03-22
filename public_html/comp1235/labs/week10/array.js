// # DDI RULE (Just to remember)
// D - Declare the filename
// D - Declare the function name
// I - it => content/return values to match res
describe("array", function () {
  describe("calculateAge", function () {
    it("this is a function", function () {
      //match the resulting var
      expect(calculateAge(ages)).to.deep.equal(3);
      expect(calculateAge(ages1)).to.deep.equal(9);
    });
  });
});
