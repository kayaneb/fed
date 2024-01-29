console.log("hi");



var openButton = document.querySelector('.toggle-button');
var menu = document.querySelector('.menuitems');

function openMenu() {
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
openButton.addEventListener('click', openMenu);



// bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar //



// carousel 
const initSlider1 = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    //  scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        //  thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            //  the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });


    // slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.classList.contains("prev-slide") ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

      // update scrollbar thumb position based on image scroll
      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    // call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
};

// add event listeners for carousel 1
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






