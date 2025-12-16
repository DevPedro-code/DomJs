let incrementarButton;
let incremento;

// Executa quando a página termina de carregar
window.onload = function () {
  incrementarButton = document.getElementById('incrementarButton');

  // Inicializa o incremento a partir do localStorage
  incremento =
    localStorage.getItem('incremento') == null
      ? { valor: 1 }
      : JSON.parse(localStorage.getItem('incremento'));

   // Recria os itens já salvos na lista
  let j = 1;
  while (j < incremento.valor) {
    let itensUl = document.getElementById('itensUl');
    itensUl.insertAdjacentHTML('beforeend', `<li>${j}</li>`);
    j++;
  }

  // Evento de click do botão incrementar.
  incrementarButton.onclick = () => {
    let itensUl = document.getElementById('itensUl');
    itensUl.insertAdjacentHTML('beforeend', `<li>${incremento.valor}</li>`);

    incremento.valor++;
    localStorage.setItem('incremento', JSON.stringify(incremento));
  };

  incrementarButton.onmouseover = () => {
    incrementarButton.style.backgroundColor = 'blue';
  };

  incrementarButton.onmouseout = () => {
    incrementarButton.style.backgroundColor = 'gray';
  };

  incrementarButton.addEventListener('dblclick', () => {
    console.log('Clicou no dblclick');
  });
};
