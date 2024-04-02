const url = "https://gedaijef.github.io/siteGedai/json/cards.json";

const postsContainer = document.querySelector("#posts-container");
postsContainer.style.display = 'none'

const title = document.querySelectorAll('.title')

async function filtro() {
    postsContainer.innerHTML = "";
    const filtro = document.getElementById("input").value.trim()

    const response = await fetch(url);
    const data = await response.json(); //recebendo tudo em array

    console.log(filtro)

    data.map((post) => {
        const wrapper = document.querySelectorAll(".wrapper")
        const classe = post.classe

        // Limpeza antes da nova filtragem
        

        if (filtro == classe) {
            for (let i = 0; i < wrapper.length; i++) {
                wrapper[i].style.display = 'none'
                title[i].style.display = 'none'
            }

            postsContainer.style.display = 'flex'

            const article = document.createElement("article")
            article.classList.add("cards")

            const divTextos = document.createElement("div")
            divTextos.classList.add("textos")

            const divTitulo = document.createElement("div")
            const h1 = document.createElement("h1")
            h1.classList.add("titulo-card")
            h1.innerText = post.titulo

            const divSubtitulo = document.createElement("div")
            const h2 = document.createElement("h2")
            h2.classList.add("subtitulo-card")
            h2.innerText = post.subtitulo

            const divTexto = document.createElement("div")
            const p = document.createElement("p")
            p.classList.add("texto-card")
            p.innerText = post.texto


            divTexto.appendChild(p)
            divSubtitulo.appendChild(h2)
            divTitulo.appendChild(h1)
            divTextos.appendChild(divTitulo)
            divTextos.appendChild(divSubtitulo)
            divTextos.appendChild(divTexto)

            article.appendChild(divTextos)

            postsContainer.appendChild(article);
            console.log(p)

        }
        else if (filtro == "") {
            for (let i = 0; i < wrapper.length; i++) {
                wrapper[i].style.display = 'block'
                title[i].style.display = 'block'
                postsContainer.style.display = 'none'
            }
        }
    });
}