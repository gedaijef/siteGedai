const wrapperSala = document.querySelector(".wSala");
const carouselSala = document.querySelector(".cSala");
const firstCardWidthSala = carouselSala.querySelector(".sala").offsetWidth;
const arrowBtnsSala = document.querySelectorAll(".iSala");
const carouselChildrensSala = [...carouselSala.children];

let isDraggingSala = false, isAutoPlaySala = true, startXSala, startScrollLeftSala, timeoutIdSala;

// Get the number of cards that can fit in the carousel at once
let cardPerViewSala = Math.round(carouselSala.offsetWidth / firstCardWidthSala);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrensSala.slice(-cardPerViewSala).reverse().forEach(card => {
    carouselSala.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrensSala.slice(0, cardPerViewSala).forEach(card => {
    carouselSala.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carouselSala.classList.add("no-transition");
carouselSala.scrollLeft = carouselSala.offsetWidth;
carouselSala.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtnsSala.forEach(btn => {
    btn.addEventListener("click", () => {
        carouselSala.scrollLeft += btn.id == "left" ? -firstCardWidthSala : firstCardWidthSala;
    });
});

const dragStartSala = (e) => {
    isDraggingSala = true;
    carouselSala.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startXSala = e.pageX;
    startScrollLeftSala = carouselSala.scrollLeft;
}

const draggingSala = (e) => {
    if(!isDraggingSala) return; // if isDraggingSala is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carouselSala.scrollLeft = startScrollLeftSala - (e.pageX - startXSala);
}

const dragStopSala = () => {
    isDraggingSala = false;
    carouselSala.classList.remove("dragging");
}

const infiniteScrollSala = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carouselSala.scrollLeft === 0) {
        carouselSala.classList.add("no-transition");
        carouselSala.scrollLeft = carouselSala.scrollWidth - (2 * carouselSala.offsetWidth);
        carouselSala.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carouselSala.scrollLeft) === carouselSala.scrollWidth - carouselSala.offsetWidth) {
        carouselSala.classList.add("no-transition");
        carouselSala.scrollLeft = carouselSala.offsetWidth;
        carouselSala.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutIdSala);
    if(!wrapperSala.matches(":hover")) autoPlaySala();
}

const autoPlaySala = () => {
    if(window.innerWidth < 800 || !isAutoPlaySala) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutIdSala = setTimeout(() => carouselSala.scrollLeft += firstCardWidthSala, 1500);
}
autoPlaySala();

carouselSala.addEventListener("mousedown", dragStartSala);
carouselSala.addEventListener("mousemove", draggingSala);
document.addEventListener("mouseup", dragStopSala);
carouselSala.addEventListener("scroll", infiniteScrollSala);
wrapperSala.addEventListener("mouseenter", () => clearTimeout(timeoutIdSala));
wrapperSala.addEventListener("mouseleave", autoPlaySala);