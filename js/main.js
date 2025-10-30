// js/main.js

window.onload = () => {
  const pagina = localStorage.getItem("paginaAtual") || "home";
  navegar(pagina);
};
