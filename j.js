function alterartitulo() {
    const titulo = document.querySelector('.titulo');
    if (titulo) {
        titulo.innerHTML = 'Título foi alterado';
    } else {
        console.error("Elemento '.titulo' não encontrado.");
    }
}

function alterarimagem() {
    const imagem = document.querySelector('.imagem');
    if (imagem) {
        imagem.src = 'cat.png';
    } else {
        console.error("Elemento '.imagem' não encontrado.");
    }
}


function alterarcor() {
    const paragrafo = document.querySelector('p');
    if (paragrafo) {
        paragrafo.style.color = "pink";
    } else {
        console.error("Parágrafo não encontrado.");
    }
}

function tocarAudio() {
   const audio = document.getElementById("meuAudio");
   audio.play();
}

    const buttons = document.querySelectorAll(".btn");
      buttons.forEach(button => {
      button.addEventListener("click", () => {
      button.classList.toggle("novo");
});
});


const botaoTitulo = document.querySelector("#mudartitulo");
const botaoImagem = document.querySelector("#mudarimagem");
const botaoCor = document.querySelector("#mudarcor");

if (botaoTitulo) botaoTitulo.onclick = alterartitulo;
else console.error("Botão 'mudartitulo' não encontrado.");

if (botaoImagem) botaoImagem.onclick = alterarimagem;
else console.error("Botão 'mudarimagem' não encontrado.");

if (botaoCor) botaoCor.onclick = alterarcor;
else console.error("Botão 'mudarcor' não encontrado.");