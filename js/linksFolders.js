function produtividade1() {
    let url = "produtividade1.html";
    window.open(url, "_self");
}
function produtividade2() {
    let url = "produtividade2.html";
    window.open(url, "_self");
}
function produtividade3() {
    let url = "produtividade3.html";
    window.open(url, "_self");
}
function sala1() {
    let url = "sala1.html";
    window.open(url, "_self");
}
function sala2() {
    let url = "sala2.html";
    window.open(url, "_self");
}
function sala3() {
    let url = "sala3.html";
    window.open(url, "_self");
}


function limpar() {
    localStorage.removeItem("filtro")
}
function filtro() {
    const filtro = document.getElementById("input").value.trim()
    if (filtro.trim() != "") {
        localStorage.setItem("filtro", filtro)
    }

}