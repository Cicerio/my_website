const aboutImg = document.querySelector(".aboutImg");

const images = [
  "img5.jpg",
  "img6.jpg",
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = "photos/" + images[i];
  img.alt = "Gallery Image " + (i + 5);
  aboutImg.appendChild(img);
}
