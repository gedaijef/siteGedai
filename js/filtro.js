const url = "https://gedaijef.github.io/siteGedai/json/cards.json";

const postsContainer = document.querySelector("#posts-container");
postsContainer.style.display = 'none';

const title = document.querySelectorAll('.title');

async function filtro() {
    postsContainer.innerHTML = "";
    const filtro = document.getElementById("input").value.trim();

    const response = await fetch(url);
    const data = await response.json(); // Recebendo tudo em array

    console.log(filtro);

    data.map((post) => {
        const wrapper = document.querySelectorAll(".wrapper");
        const classe = post.classe;

        // Verifica se classe é uma lista e se contém o filtro, ou se é uma string e é igual ao filtro
        const matchFilter = Array.isArray(classe) ? classe.includes(filtro) : classe === filtro;

        if (matchFilter) {
            for (let i = 0; i < wrapper.length; i++) {
                wrapper[i].style.display = 'none';
                title[i].style.display = 'none';
            }

            postsContainer.style.display = 'flex';

            const article = document.createElement("article");
            article.classList.add("container");

            const divImg = document.createElement("div");
            divImg.classList.add("img");

            const tagImg = document.createElement("img");
            tagImg.classList.add("banner");
            tagImg.setAttribute("src", post.Imagem);

            const divTextos = document.createElement("div");
            divTextos.classList.add("textos");

            const h1 = document.createElement("h1");
            h1.classList.add("titulo-card");
            h1.innerText = post.titulo;

            const h2 = document.createElement("h2");
            h2.classList.add("subtitulo-card");
            h2.innerText = post.subtitulo;

            const p = document.createElement("p");
            p.classList.add("texto-card");
            p.innerText = post.texto;

            const divContainer = document.createElement("div");
            divContainer.classList.add("container-link");

            const divLink = document.createElement("div");
            divLink.setAttribute("id", "link");

            const link = document.createElement("a");
            link.setAttribute("id", "acessarFolders");
            link.setAttribute("href", post.link);
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
        else if (filtro === "") {
            for (let i = 0; i < wrapper.length; i++) {
                wrapper[i].style.display = 'block';
                title[i].style.display = 'block';
                postsContainer.style.display = 'none';
            }
        }
    });
}
