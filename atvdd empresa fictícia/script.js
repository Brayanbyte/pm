function scrollToContato() {
  document.getElementById("contato").scrollIntoView({
    behavior: "smooth"
  });
}

function enviarMensagem(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso!");
}




let carrinho = [];

function toggleCarrinho() {
  const modal = document.getElementById("carrinho-modal");
  if (modal) {
    modal.classList.toggle("ativo");
  }
}

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome: nome, preco: preco });
  atualizarCarrinho();
  alert(nome + " foi adicionado ao carrinho!");
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const container = document.getElementById("carrinho-itens");
  const contador = document.getElementById("carrinho-contador");
  const totalEl = document.getElementById("carrinho-total");

  if (!container) return;

  let html = "";
  let total = 0;

  for (let i = 0; i < carrinho.length; i++) {
    const item = carrinho[i];
    total += item.preco;
    html += '<div class="carrinho-item">' +
      '<div class="carrinho-item-info">' +
      '<div class="carrinho-item-nome">' + item.nome + '</div>' +
      '<div class="carrinho-item-preco">R$ ' + item.preco.toFixed(2).replace(".", ",") + '</div>' +
      '</div>' +
      '<button class="remover-item" onclick="removerDoCarrinho(' + i + ')">&times;</button>' +
      '</div>';
  }

  container.innerHTML = html || '<p class="carrinho-vazio">Seu carrinho está vazio</p>';

  if (contador) {
    contador.textContent = carrinho.length;
    contador.style.display = carrinho.length > 0 ? "flex" : "none";
  }

  if (totalEl) {
    totalEl.textContent = "R$ " + total.toFixed(2).replace(".", ",");
  }
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  alert("Compra finalizada com sucesso! Obrigado por comprar na Orion Grand Hotels.");
  carrinho = [];
  atualizarCarrinho();
  toggleCarrinho();
}

