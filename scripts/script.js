console.log("hi");




var openKnop = document.querySelector('#button');
var menu = document.querySelector('#menuitems');

function openen() {
  console.log('open');
  menu.classList.toggle('open');

  var links = menu.querySelectorAll('a');
  // tabindex open of dicht 
  var tabindexValue = menu.classList.contains('open') ? 0 : -1;

  //  tabindex voor elke link
  links.forEach(function (link) {
    link.tabIndex = tabindexValue;
  });
}

// event listener om het te openen
openKnop.addEventListener('click', openen);



// bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar //



// carousel 
const initSlider1 = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        // ... (same as before)
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.classList.contains("prev-slide") ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

      // Update scrollbar thumb position based on image scroll
      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
};

// Add event listeners for carousel 1
window.addEventListener("resize", initSlider1);
window.addEventListener("load", initSlider1);




// dark mode
var darkButton = document.querySelector(".theme-toggle.dark");
darkButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    var img = darkButton.querySelector("img");
    img.src = document.body.classList.contains("dark-theme") ? "images/sun.png" : "images/moon.svg";
});

// high contrast
var contrastButton = document.querySelector(".theme-toggle.contrast");
contrastButton.addEventListener("click", function () {
    document.body.classList.toggle("highcontrast-theme");
    var img = contrastButton.querySelector("img");
    img.src = document.body.classList.contains("highcontrast-theme") ? "images/hoogcontrastaan.svg" : "images/hoogcontrastuit.svg";
});






