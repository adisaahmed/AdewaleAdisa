var imageNo = Math.floor(
  Math.random() * 3 + 1
); /* Change the 5 to the amount of images you have */
$(".main_body_content_header").attr(
  "src",
  "bannerimage-" + imageNo + ".jpg"
); /* Images must be named bannerimage-1.jpg, bannerimage-2.jpg, etc or any convention of your choosing*/
