var imageSlider = document.getElementById("slider");
let count = 0;
var imageArray = [
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/1.jpg",
];

function startSlideShow() {
  let arrayLen = imageArray.length;

  interval = setInterval(function () {
    if (count == arrayLen - 1) {
      count = 0;
    } else {
      count += 1;
      imageSlider.src = imageArray[count];
    }
  }, 3000);
}

function stopSlideShow() {
  clearInterval(interval);
  console.log("Stopped");
}
