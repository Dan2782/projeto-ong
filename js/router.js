// js/router.js

function navegar(pagina) {
  const conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = paginas[pagina];

  // Salva a última página acessada no localStorage
  localStorage.setItem("paginaAtual", pagina);
}