const sliderImages = document.querySelectorAll(".slide-in");

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}

function checkSlide() {
    sliderImages.forEach(image => {
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2; 
        console.log(window.scrollY);
        console.log(window.innerHeight);
        console.log(slideInAt);
        const imageBottom = image.offsetTop + image.height

        const isHalfShown = slideInAt > image.offsetTop;
        const isNotPassedImage = window.scrollY < imageBottom;
        if (isHalfShown && isNotPassedImage) {
            image.classList.add("active");
        } else {
            image.classList.remove("active");
        }
    });
};


window.addEventListener("scroll", debounce(checkSlide));