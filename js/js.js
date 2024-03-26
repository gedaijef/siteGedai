lucide.createIcons()



let select = document.querySelector('.select'),

    selectedValue = document.getElementById('selected-value'), optionsViewButton = document.getElementById('options-view-button'), inputsOptions = document.querySelectorAll('.option input')



inputsOptions.forEach(input => {

    input.addEventListener('click', event => {

        selectedValue.textContent = input.dataset.label

        const isMouseOrTouch =

            event.pointerType ==

            "mouse" ||

            event.pointerType == "touch"

        isMouseOrTouch && optionsViewButton.click()
    })

})


window.addEventListener('keydown', e => {

    if (!select.classList.contains('open')) return

    if (e.key == "Escape" || e.key == "") {
        optionsViewButton.click()

    }

})

optionsViewButton.addEventListener('input', () => {

    select.classList.toggle('open')

    if (!select.classList.contains('open')) return

    const input =

        document.querySelector('.option input:checked') || document.querySelector('.option input')

    input.focus()

})


function apresentacao() {
    let padaria = document.getElementsByClassName('label')[0]
    padaria = padaria.textContent;
    let categoria = document.getElementById('select-value')
    categoria.innerHTML = padaria
    
}

function email() {
    let email = document.getElementsByClassName('label')[1]
    email = email.textContent;
    let categoria = document.getElementById('select-value')
    categoria.innerHTML = email
}

function formula() {
    let formula = document.getElementsByClassName('label')[2]
    formula = formula.textContent;
    let categoria = document.getElementById('select-value')
    categoria.innerHTML = formula
}

function generativa() {
    let generativa = document.getElementsByClassName('label')[3]
    generativa = generativa.textContent;
    let categoria = document.getElementById('select-value')
    categoria.innerHTML = generativa
}

function imagem() {
    let imagem = document.getElementsByClassName('label')[4]
    imagem = imagem.textContent;
    let categoria = document.getElementById('select-value')
    categoria.innerHTML = imagem
}
function video() {
    let video = document.getElementsByClassName('label')[5]
    video = video.textContent;
    let categoria = document.getElementById('select-value')
    categoria.innerHTML = video
}