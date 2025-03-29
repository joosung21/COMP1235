//Step 1: Create a function to declare vars
function Img(title, src, content) {
  this.title = title;
  this.src = src;
  this.content = content;
}
//Step 2: makeMarkup => returns the section
Img.prototype.makeMarkup = function () {
  return `<div><img src="${this.src}" alt="${this.title}"><p>${this.content}</p></div>`;
};
//Step 3: makeElement
Img.prototype.makeElement = function () {
  let ImgDiv = document.createElement("div");
  ImgDiv.innerHTML = this.makeMarkup();
  return ImgDiv;
};
//Step 4: load the section by addEventListener
document.addEventListener("DOMContentLoaded", function () {
  const bodyElement = document.querySelector("body");
  const i1 = new Img(
    "Image 1",
    "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=600",
    "This is image 1"
  );
  bodyElement.appendChild(i1.makeElement());
});
