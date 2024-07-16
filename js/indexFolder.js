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

                //     postsContainer.innerHTML += `
                //     <article class="container">
                //     <img src="${data[i].Imagem}" class="banner">
                //     <h1 class="titulo-card bing">${data[i].titulo}</h1>
                //     <h2 class="subtitulo-card">${data[i].subtitulo}</h2>
                //     <p class="texto-card">${data[i].texto}</p>
                //     <a href="${data[i].link}" id="acessarFolders" target="_blank">Acesse</a>
                // </article>
                // `
                    postsContainer.style.display = 'flex';

                    const article = document.createElement("article");
                    article.classList.add("container");

                    const divImg = document.createElement("div");
                    divImg.classList.add("img");

                    const tagImg = document.createElement("img");
                    tagImg.classList.add("banner");
                    tagImg.setAttribute("src", data[i].Imagem);

                    const divTextos = document.createElement("div");
                    divTextos.classList.add("textos");

                    const h1 = document.createElement("h1");
                    h1.classList.add("titulo-card");
                    h1.innerText = data[i].titulo;

                    const h2 = document.createElement("h2");
                    h2.classList.add("subtitulo-card");
                    h2.innerText = data[i].subtitulo;

                    const p = document.createElement("p");
                    p.classList.add("texto-card");
                    p.innerText = data[i].texto;

                    const divContainer = document.createElement("div");
                    divContainer.classList.add("container-link");

                    const divLink = document.createElement("div");
                    divLink.setAttribute("id", "link");

                    const link = document.createElement("a");
                    link.setAttribute("id", "acessarFolders");
                    link.setAttribute("href", data[i].link);
                    link.innerText = "Acesse";

                    divLink.appendChild(link);
                    divContainer.appendChild(divLink);

                    divTextos.appendChild(h1);
                    divTextos.appendChild(h2);
                    divTextos.appendChild(p);

                    divImg.appendChild(tagImg);

                    article.appendChild(divImg);
                    article.appendChild(divTextos);
                    article.appendChild(divContainer);

                    postsContainer.appendChild(article);
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