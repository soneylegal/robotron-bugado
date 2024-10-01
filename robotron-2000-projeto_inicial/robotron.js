const cores = {
  cores: [
    'img/robotron-vermelho.png', 
    'img/robotron-amarelo.png', 
    'img/robotron-branco.png', 
    'img/robotron-preto.png', 
    'img/robotron-rosa.png', 
    'img/robotron-azul.png'
  ]
};

const estatisticas = {
  'img/robotron-vermelho.png': { forca: 800, poder: 700, energia: 300, velocidade: 600 },
  'img/robotron-amarelo.png': { forca: 750, poder: 650, energia: 280, velocidade: 620 },
  'img/robotron-branco.png': { forca: 720, poder: 620, energia: 290, velocidade: 610 },
  'img/robotron-preto.png': { forca: 780, poder: 680, energia: 320, velocidade: 590 },
  'img/robotron-rosa.png': { forca: 770, poder: 660, energia: 310, velocidade: 600 },
  'img/robotron-azul.png': { forca: 790, poder: 690, energia: 330, velocidade: 580 },
};

let indiceCorAtual = 0;
const robo = document.querySelector('.robo');
const botaoProximo = document.querySelector('.proximo');
const botaoAnterior = document.querySelector('.anterior');

function atualizarCor() {
  robo.src = cores.cores[indiceCorAtual];
  
  const estatisticaValores = estatisticas[robo.src];
  document.querySelector('.estatistica-numero:nth-child(1)').textContent = estatisticaValores.forca;
  document.querySelector('.estatistica-numero:nth-child(2)').textContent = estatisticaValores.poder;
  document.querySelector('.estatistica-numero:nth-child(3)').textContent = estatisticaValores.energia;
  document.querySelector('.estatistica-numero:nth-child(4)').textContent = estatisticaValores.velocidade;
}

botaoProximo.addEventListener('click', (event) => {
  event.preventDefault();
  indiceCorAtual = (indiceCorAtual + 1) % cores.cores.length;
  atualizarCor();
});

botaoAnterior.addEventListener('click', (event) => {
  event.preventDefault();
  indiceCorAtual = (indiceCorAtual - 1 + cores.cores.length) % cores.cores.length;
  atualizarCor();
});

// Ajuste dos botões
const botoesAjuste = document.querySelectorAll('.controle-ajuste');

botoesAjuste.forEach((botao) => {
  botao.addEventListener('click', (event) => {
    event.preventDefault();

    const controleContador = event.target.parentElement.querySelector('.controle-contador');
    let valorAtual = parseInt(controleContador.value); 

    if (event.target.textContent === "+") {
      if (valorAtual < 10) { 
        controleContador.value = valorAtual + 1;
      }
    } else {
      if (valorAtual > 0) {
        controleContador.value = valorAtual - 1;
      }
    }
  });
});
