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
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
    
    
     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


// darkmode
var icon = document.getElementById("dark");
icon.onclick = function (){
	document.body.classList.toggle("dark-theme");
	if(document.body.classList.contains("dark-theme")){
		dark.src = "images/sun.png";
	} else {
		dark.src = "images/moon.svg";
	}

}

// high contrast
var icon = document.getElementById("contrast");
icon.onclick = function (){
	document.body.classList.toggle("highcontrast-theme");
	if(document.body.classList.contains("highcontrast-theme")){
		contrast.src = "images/hoogcontrastaan.svg";
	} else {
		contrast.src = "images/hoogcontrastuit.svg";
	}

}
