function scrollToContato() {
  document.getElementById("contato").scrollIntoView({
    behavior: "smooth"
  });
}

function enviarMensagem(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso!");
}

