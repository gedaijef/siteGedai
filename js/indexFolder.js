const url = "https://gedaijef.github.io/siteGedai/json/cards.json";

const postsContainer = document.getElementById("posts-container");
const title = document.getElementsByClassName('title');
const wrapper = document.getElementsByClassName('wrapper');

function filtro() {
    postsContainer.innerHTML = "";
    const filtro = document.getElementById("filtro-select").value.trim();

    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const matchFilter = Array.isArray(data[i].classe) ? data[i].classe.includes(filtro) : data[i].classe === filtro;



                if (matchFilter) {
                    for (let i = 0; i < wrapper.length; i++) {
                        wrapper[i].style.display = 'none';
                        title[i].style.display = 'none';

                    }
                    let id = data[i].titulo.toLowerCase()
                    id = id.replace(/\s/g, "");
                   

                    postsContainer.style.display = 'flex';

                    postsContainer.innerHTML += `
                    <article>
                    <img src="" class="banner" id="${id}">
                    <h1 class="titulo-card ${id}">${data[i].titulo}</h1>
                    <h2 class="subtitulo-card">${data[i].subtitulo}</h2>
                    <p class="texto-card">${data[i].texto}</p>
                    <a href="${data[i].link}" id="acessarFolders" target="_blank">Acesse</a>
                </article>
                `
                }
                else if (filtro === "" || filtro === "geral") {
                    for (let i = 0; i < wrapper.length; i++) {
                        wrapper[i].style.display = 'block';
                        title[i].style.display = 'block';
                        postsContainer.style.display = 'none';
                    }
                }
            }
        })
        .catch(error => {
            console.error("Erro ao buscar os dados: ", error);
        });
}



function prod1() {
    window.open("produtividade1.html", "_self")
}
function prod2() {
    window.open("produtividade2.html", "_self")
}
function prod3() {
    window.open("produtividade3.html", "_self")
}
function prod4() {
    window.open("produtividade4.html", "_self")
}
function sala1() {
    window.open("sala1.html", "_self")
}
function sala2() {
    window.open("sala2.html", "_self")
}
function sala3() {
    window.open("sala3.html", "_self")
}