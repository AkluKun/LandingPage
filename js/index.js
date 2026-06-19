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

// ===========CONTADOR===============

const fim = new Date();
fim.setHours(fim.getHours() + 48);

function atualizarContador() {
  const agora = new Date();
  const diferenca = fim - agora;

  if (diferenca <= 0) {
    document.getElementById('dias').textContent = '00';
    document.getElementById('horas').textContent = '00';
    document.getElementById('minutos').textContent = '00';
    document.getElementById('segundos').textContent = '00';
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
  document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
  document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
  document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
}

atualizarContador();
setInterval(atualizarContador, 1000);
