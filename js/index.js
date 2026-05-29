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
