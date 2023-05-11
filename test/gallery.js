const gallery = document.querySelector(".gallery");

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = "photos/" + images[i];
  img.alt = "Gallery Image " + (i + 1);
  gallery.appendChild(img);
}
