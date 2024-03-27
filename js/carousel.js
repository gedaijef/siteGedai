const wrapper = document.getElementsByClassName(".wrapper")[0];
const carousel = document.getElementsByClassName("carousel")[0];
const carousel1 = document.getElementsByClassName("carousel")[1];


// GUARDA A LARGURA DO PRIMEIRO CARD
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

// CRIA UM ARRAY COM TODOS OS ELEMENTOS FILHOS DO CAROUSEL
const carouselChildrens = [...carousel.children];

//estado de arrasto, reprodução automática, posição inicial do cursor, posição inicial da rolagem e o ID da função de tempo.
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Calcula quantos cartões cabem na tela ao mesmo tempo.
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

const autoPlay = () => {
    if(window.innerWidth < 700 || !isAutoPlay) return; 
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2000);
}
const autoPlay1 = () => {
    if(window.innerWidth < 700 || !isAutoPlay) return; 
    timeoutId = setTimeout(() => carousel1.scrollLeft += firstCardWidth, 2000);
}

autoPlay();
autoPlay1()


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
