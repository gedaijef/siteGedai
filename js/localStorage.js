const titulosDocumento = Array.from(document.querySelectorAll('.documento .titulo-card'))
    .map(tituloDoc => tituloDoc.textContent.trim());

const titulosEmail = Array.from(document.querySelectorAll('.email .titulo-card'))
    .map(tituloEmail => tituloEmail.textContent.trim());

const titulosForm = Array.from(document.querySelectorAll('.formula .titulo-card'))
    .map(tituloForm => tituloForm.textContent.trim());

const titulosGen = Array.from(document.querySelectorAll('.generativa .titulo-card'))
    .map(tituloGen => tituloGen.textContent.trim());

const titulosQuestoes = Array.from(document.querySelectorAll('.questoes .titulo-card'))
    .map(tituloQuestoes => tituloQuestoes.textContent.trim());

const titulosReuniao = Array.from(document.querySelectorAll('.reuniao .titulo-card'))
    .map(tituloReuniao => tituloReuniao.textContent.trim());

const titulosVisual = Array.from(document.querySelectorAll('.visual .titulo-card'))
    .map(tituloVisual => tituloVisual.textContent.trim());


const subDocumento = Array.from(document.querySelectorAll('.documento .subtitulo-card'))
    .map(subtituloDoc => subtituloDoc.textContent.trim());

const subEmail = Array.from(document.querySelectorAll('.email .subtitulo-card'))
    .map(subtituloEmail => subtituloEmail.textContent.trim());

const subForm = Array.from(document.querySelectorAll('.formula .subtitulo-card'))
    .map(subtituloForm => subtituloForm.textContent.trim());

const subGen = Array.from(document.querySelectorAll('.generativa .subtitulo-card'))
    .map(subtituloGen => subtituloGen.textContent.trim());

const subQuestoes = Array.from(document.querySelectorAll('.questoes .subtitulo-card'))
    .map(subtituloQuestoes => subtituloQuestoes.textContent.trim());

const subReuniao = Array.from(document.querySelectorAll('.reuniao .subtitulo-card'))
    .map(subtituloReuniao => subtituloReuniao.textContent.trim());

const subVisual = Array.from(document.querySelectorAll('.visual .subtitulo-card'))
    .map(subtituloVisual => subtituloVisual.textContent.trim());



const textoDocumento = Array.from(document.querySelectorAll('.documento .texto-card'))
    .map(textoDoc => textoDoc.textContent.trim());

const textoEmail = Array.from(document.querySelectorAll('.email .texto-card'))
    .map(textoEmail => textoEmail.textContent.trim());

const textoForm = Array.from(document.querySelectorAll('.formula .texto-card'))
    .map(textoForm => textoForm.textContent.trim());

const textoGen = Array.from(document.querySelectorAll('.generativa .texto-card'))
    .map(textoGen => textoGen.textContent.trim());

const textoQuestoes = Array.from(document.querySelectorAll('.questoes .texto-card'))
    .map(textoQuestoes => textoQuestoes.textContent.trim());

const textoReuniao = Array.from(document.querySelectorAll('.reuniao .texto-card'))
    .map(textoReuniao => textoReuniao.textContent.trim());

const textoVisual = Array.from(document.querySelectorAll('.visual .texto-card'))
    .map(textoVisual => textoVisual.textContent.trim());






    // function getLocalStorageStartingWith(prefix) {
//     const keys = Object.keys(localStorage);
//     const matchingKeys = keys.filter(key => key.startsWith(prefix));
//     const values = matchingKeys.map(key => localStorage.getItem(key));
//     return values;
// }

// const titlePrefixedItems = getLocalStorageStartingWith("Título_");
// console.log(titlePrefixedItems);





//GUARDANDO OS TÍTULOS DE CADA CARD
for (let i = 0; i < titulosDocumento.length; i++) {
    localStorage.setItem("documento_titulo_" + titulosDocumento[i], titulosDocumento[i])
}
for (let i = 0; i < titulosEmail.length; i++) {
    localStorage.setItem("email_titulo_" + titulosEmail[i], titulosEmail[i])
}
for (let i = 0; i < titulosForm.length; i++) {
    localStorage.setItem("formulas_titulo_" + titulosForm[i], titulosForm[i])
}
for (let i = 0; i < titulosGen.length; i++) {
    localStorage.setItem("generativa_titulo_" + titulosGen[i], titulosGen[i])
}
for (let i = 0; i < titulosQuestoes.length; i++) {
    localStorage.setItem("questoes_titulo_" + titulosQuestoes[i], titulosQuestoes[i])
}
for (let i = 0; i < titulosReuniao.length; i++) {
    localStorage.setItem("reuniao_titulo_" + titulosReuniao[i], titulosReuniao[i])
}
for (let i = 0; i < titulosVisual.length; i++) {
    localStorage.setItem("visual_titulo_" + titulosVisual[i], titulosVisual[i])
}


//GUARDANDO OS SUBTÍTULOS DE CADA CARD
for (let i = 0; i < subDocumento.length; i++) {
    localStorage.setItem("documento_subtitulo_" + titulosDocumento[i], subDocumento[i])
}
for (let i = 0; i < subEmail.length; i++) {
    localStorage.setItem("email_subtitulo_" + titulosEmail[i], subEmail[i])
}
for (let i = 0; i < subForm.length; i++) {
    localStorage.setItem("formulas_subtitulo_" + titulosForm[i], subForm[i])
}
for (let i = 0; i < subGen.length; i++) {
    localStorage.setItem("generativa_subtitulo_" + titulosGen[i], subGen[i])
}
for (let i = 0; i < subQuestoes.length; i++) {
    localStorage.setItem("questoes_subtitulo_" + titulosQuestoes[i], subQuestoes[i])
}
for (let i = 0; i < subReuniao.length; i++) {
    localStorage.setItem("reuniao_subtitulo_" + titulosReuniao[i], subReuniao[i])
}
for (let i = 0; i < subVisual.length; i++) {
    localStorage.setItem("visual_subtitulo_" + titulosVisual[i], subVisual[i])
}


//GUARDANDO OS TEXTOS DE CADA CARD
for (let i = 0; i < textoDocumento.length; i++) {
    localStorage.setItem("documento_texto_" + titulosDocumento[i], textoDocumento[i])
}
for (let i = 0; i < textoEmail.length; i++) {
    localStorage.setItem("email_texto_" + titulosEmail[i], textoEmail[i])
}
for (let i = 0; i < textoForm.length; i++) {
    localStorage.setItem("formulas_texto_" + titulosForm[i], textoForm[i])
}
for (let i = 0; i < textoGen.length; i++) {
    localStorage.setItem("generativa_texto_" + titulosGen[i], textoGen[i])
}
for (let i = 0; i < textoQuestoes.length; i++) {
    localStorage.setItem("questoes_texto_" + titulosQuestoes[i], textoQuestoes[i])
}
for (let i = 0; i < textoReuniao.length; i++) {
    localStorage.setItem("reuniao_texto_" + titulosReuniao[i], textoReuniao[i])
}
for (let i = 0; i < textoVisual.length; i++) {
    localStorage.setItem("visual_texto_" + titulosVisual[i], textoVisual[i])
}