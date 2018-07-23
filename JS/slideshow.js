var slideIndex = 1;

// Next/previous controls
function plusSlides(n, slideset) {
  showSlides(slideIndex += n, slideset);
}

// Thumbnail image controls
function currentSlide(n, slideset) {
  showSlides(slideIndex = n, slideset);
}

function showSlides(n, slideset) {
  var i;
  var slides = document.getElementsByClassName("s" + slideset);
  var dots = document.getElementsByClassName("d" + slideset);
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}