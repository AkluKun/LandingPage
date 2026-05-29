const colecaoText = '> Nova coleção!';
const colecaoEl = document.getElementById('colecao');
colecaoEl.textContent = '';

let colecaoIndex = 0;
let isDeleting = false;
const typingSpeed = 120;
const pauseAfterTyping = 2000;
const pauseAfterDeleting = 600;

function loopTyping() {
  if (!isDeleting) {
    colecaoIndex += 1;
    colecaoEl.textContent = colecaoText.slice(0, colecaoIndex);
    if (colecaoIndex === colecaoText.length) {
      isDeleting = true;
      setTimeout(loopTyping, pauseAfterTyping);
      return;
    }
  } else {
    colecaoIndex -= 1;
    colecaoEl.textContent = colecaoText.slice(0, colecaoIndex);
    if (colecaoIndex === 0) {
      isDeleting = false;
      setTimeout(loopTyping, pauseAfterDeleting);
      return;
    }
  }

  setTimeout(loopTyping, typingSpeed);
}

loopTyping();

function atualizarContador() {
  const agora = new Date();
  const fim = new Date();
  fim.setHours(fim.getHours() + 24);

  const diferenca = fim - agora;
  const horas = Math.floor(diferenca / (1000 * 60 * 60)).toString().padStart(2, '0');
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60).toString().padStart(2, '0');
  const segundos = Math.floor((diferenca / 1000) % 60).toString().padStart(2, '0');

  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

atualizarContador();
setInterval(atualizarContador, 1000);
