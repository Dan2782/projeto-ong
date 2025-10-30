// js/validator.js

function validarFormulario(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const erro = document.getElementById("erro");

  if (!email.includes("@") || !email.includes(".")) {
    erro.textContent = "Por favor, insira um e-mail válido.";
    return false;
  }

  erro.style.color = "green";
  erro.textContent = "Formulário enviado com sucesso!";
  return true;
}