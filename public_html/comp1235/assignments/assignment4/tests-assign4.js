"use strict";

const chai = window.chai;
const expect = chai.expect;

describe("getRandomNumber()", () => {
  it("This asyn/wait function get a random number between 1-5", async () => {
    expect(await getRandomNumber()).to.be.closeTo(1, 4);
  });
});

describe("getCityData()", () => {
  it("This asyn/wait function calls geocode to return data associated with a city", async () => {
    expect((await getCityData("Toronto")).longt).to.deep.equal("-79.41946");
    expect((await getCityData("Ottawa")).longt).to.deep.equal("-75.71020");
    expect((await getCityData("New York")).longt).to.deep.equal("-73.97449");
  });
});

describe("fetchProducts()", () => {
  it("This asyn/wait function fetchs products from the dummy json products api", async () => {
    expect(await fetchProducts(1)).to.deep.equal(
      "Essence Mascara Lash Princess"
    );
    expect(await fetchProducts(2)).to.deep.equal(
      "Eyeshadow Palette with Mirror"
    );
    expect(await fetchProducts(3)).to.deep.equal("Powder Canister");
    expect(await fetchProducts(4)).to.deep.equal("Red Lipstick");
    expect(await fetchProducts(12)).to.deep.equal("Annibale Colombo Sofa");
    expect(await fetchProducts(50)).to.deep.equal("Black Whisk");
    expect(await fetchProducts(1000)).to.deep.equal(
      "Could not get products: Error: HTTP error: 404"
    );
  });
});

describe("searchStorePrice()", () => {
  it("This asyn/wait function search products from store json api", async () => {
    expect(await searchStorePrice("chicken noodle soup")).to.deep.equal(1.89);
    expect(await searchStorePrice("tomato soup")).to.deep.equal(1.4);
    expect(await searchStorePrice("spam")).to.deep.equal(2.85);
    expect(await searchStorePrice("refried beans")).to.deep.equal(0.99);
  });
});

describe("getStarWarsCharacters()", () => {
  it("This promise calls the star wars api, returing JSON object {key, value} of characters", async () => {
    expect(
      (await getStarWarsCharacters()).characters["Owen Lars"]
    ).to.deep.equal("https://swapi.dev/api/people/6/");
    expect(
      (await getStarWarsCharacters()).characters["Darth Vader"]
    ).to.deep.equal("https://swapi.dev/api/people/4/");
    expect(
      (await getStarWarsCharacters()).characters["Darth Vader"]
    ).to.deep.equal("https://swapi.dev/api/people/4/");
  });
});
