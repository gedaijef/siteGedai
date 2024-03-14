const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', () => {
    // Obtenha o href da página que você deseja abrir
    const href = item.dataset.href; // Assumindo que você definiu um data-href na div

    // Se o href estiver definido, abra a página em uma nova aba
    if (href) {
      window.open(index.html, '_blank');
    }
  });
});
