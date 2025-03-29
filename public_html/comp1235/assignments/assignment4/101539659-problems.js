"use strict";

async function getRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 5) + 1);
    }, 500);
  });
}

async function getCityData(city) {
  const response = await fetch(`https://geocode.xyz/${city}?json=1`);
  const data = await response.json();
  return data;
}

async function fetchProducts(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data.title;
  } catch (error) {
    return `Could not get products: ${error}`;
  }
}

async function searchStorePrice(product_name) {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    const product = data.find((item) => item.name === product_name);
    return product.price;
  } catch (error) {
    return `Could not get products: ${error}`;
  }
}

async function getStarWarsCharacters() {
  const response = await fetch("https://swapi.dev/api/people/");
  const data = await response.json();
  const characters = {};
  data.results.forEach((character) => {
    characters[character.name] = character.url;
  });
  return { characters };
}
