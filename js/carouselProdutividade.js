const wrapperProd = document.querySelector(".wProd");
const carouselProd = document.querySelector(".cProd");
const firstCardWidthProd = carouselProd.querySelector(".prod").offsetWidth;
const arrowBtnsProd = document.querySelectorAll(".iProd");
const carouselChildrensProd = [...carouselProd.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carouselProd.offsetWidth / firstCardWidthProd);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrensProd.slice(-cardPerView).reverse().forEach(card => {
    carouselProd.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrensProd.slice(0, cardPerView).forEach(card => {
    carouselProd.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carouselProd.classList.add("no-transition");
carouselProd.scrollLeft = carouselProd.offsetWidth;
carouselProd.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtnsProd.forEach(btn => {
    btn.addEventListener("click", () => {
        carouselProd.scrollLeft += btn.id == "left" ? -firstCardWidthProd : firstCardWidthProd;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carouselProd.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carouselProd.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carouselProd.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carouselProd.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carouselProd.scrollLeft === 0) {
        carouselProd.classList.add("no-transition");
        carouselProd.scrollLeft = carouselProd.scrollWidth - (2 * carouselProd.offsetWidth);
        carouselProd.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carouselProd.scrollLeft) === carouselProd.scrollWidth - carouselProd.offsetWidth) {
        carouselProd.classList.add("no-transition");
        carouselProd.scrollLeft = carouselProd.offsetWidth;
        carouselProd.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapperProd.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carouselProd.scrollLeft += firstCardWidthProd, 1500);
}


carouselProd.addEventListener("mousedown", dragStart);
carouselProd.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carouselProd.addEventListener("scroll", infiniteScroll);
wrapperProd.addEventListener("mouseenter", () => clearTimeout(timeoutId));
