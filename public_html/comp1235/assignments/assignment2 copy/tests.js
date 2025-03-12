"use strict";

const chai = window.chai;
const expect = chai.expect;

describe("_findNumOfDigits", () => {
  it("should return the correct number of digits in a given argument", () => {
    expect(_findNumOfDigits(1000)).to.equal(4);
    expect(_findNumOfDigits("abcd")).to.equal(0);
    expect(_findNumOfDigits(12)).to.equal(2);
    expect(_findNumOfDigits("COMP1235")).to.equal(4);
    expect(_findNumOfDigits(0)).to.equal(1);
    expect(_findNumOfDigits("C1O2M3P5")).to.equal(4);
  });
});

describe("_surplus", () => {
  it("should return a function that returns the original string", () => {
    const fn = _surplus("orange");
    expect(fn()).to.equal("orange");
    expect(_surplus("pear")()).to.equal("pear");
    expect(_surplus("")()).to.equal("");
  });
});

describe("_strNumbers", () => {
  it("should return an array of strings containing numbers", () => {
    expect(_strNumbers(["1a", "a", "2b", "b"])).to.deep.equal(["1a", "2b"]);
    expect(_strNumbers(["abc", "abc10"])).to.deep.equal(["abc10"]);
    expect(_strNumbers(["abc", "ab10c", "a10bc", "bcd"])).to.deep.equal([
      "ab10c",
      "a10bc",
    ]);
    expect(_strNumbers(["this is a test", "test1"])).to.deep.equal(["test1"]);
    expect(_strNumbers(["abc", "def"])).to.deep.equal([]);
  });
});

describe("_determineClassGrading", () => {
  it("should return the count of passing and failing grades and class average", () => {
    expect(_determineClassGrading([50, 51, 80, 45])).to.deep.equal([
      3, 1, 56.5,
    ]);
    expect(_determineClassGrading([35, 45, 25, 10, 6, 33])).to.deep.equal([
      0, 6, 25.7,
    ]);
    expect(_determineClassGrading([80, 90])).to.deep.equal([2, 0, 85.0]);
    expect(_determineClassGrading([])).to.deep.equal([0, 0, 0.0]);
  });
});

describe("_moveCapitalLetters", () => {
  it("should move all capital letters to the front while maintaining order", () => {
    expect(_moveCapitalLetters("moveMENT")).to.equal("MENTmove");
    expect(_moveCapitalLetters("shOrtCAKE")).to.equal("OCAKEshrt");
    expect(_moveCapitalLetters("hApPy")).to.equal("APhpy");
  });
});

/***************************************************************************************
describe('yourFunctionName', () =>  {
    it('please enter your function description here',  () => {
        expect(yourFunctionName(parameters)).to.deep.equal(expected_result)
    })
})
 ***************************************************************************************/
