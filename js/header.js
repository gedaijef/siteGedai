const arrayHeight = document.getElementsByClassName('height-nav');
const navHeight = document.getElementsByTagName('nav')[0];

for (let navHeightObj of arrayHeight)
    navHeightObj.style.height = navHeight + 'px';

function abrirMenu() {
    const botoesMenu = document.getElementById('botoesMenu');

    botoesMenu.className = botoesMenu.className.includes('responsivo') ? '' : 'responsivo'
}

