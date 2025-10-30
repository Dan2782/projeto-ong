// js/pages.js

const paginas = {
  home: `
    <h1>Bem-vindo!</h1>
    <p>Esta é a página inicial da aplicação SPA.</p>
  `,

  sobre: `
    <h1>Sobre</h1>
    <p>Este projeto foi desenvolvido para demonstrar manipulação do DOM, eventos e armazenamento local.</p>
  `,

  contato: `
    <h1>Contato</h1>
    <form onsubmit="return validarFormulario(event)">
      <label for="email">Email:</label>
      <input id="email" type="email" placeholder="Digite seu email" required>
      <br><br>
      <button type="submit">Enviar</button>
      <p id="erro" style="color: red;"></p>
    </form>
  `
};