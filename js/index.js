const imgs = [
  "vent2.jpg",
  "vent3.jpg",
  "vent4.jpg",
  "vent5.jpg",
  "vent6.jpg",
  "vent7.jpg",
  "vent8.jpg",
  "vent9.jpg",
  "vent10.jpg"
];

window.onload = function () {
  const random_index = Math.floor(math.random() * imgs.length);

  selected_img = imgs[random_index];

  document.getElementsByClassName('main_body_content_header') = `./img/${selected_img}`;
};
