/**
 * Página Sobre
 */
class AboutPage {
  /**
   * Renderiza a seção Sobre
   * @returns {string} HTML da seção Sobre
   */
  render() {
    return `
      <section id="sobre">
        <div class="container">
          <h2>Sobre Mim</h2>
          <div class="sobre-content">
            <div class="sobre-texto">
              <p>Olá! Sou Valéria, desenvolvedora front-end apaixonada por criar interfaces acessíveis e responsivas. Meu foco é desenvolver soluções que combinam design atraente com código limpo e eficiente.</p>
              <p>Com experiência em React, TypeScript e design de interfaces, busco constantemente aprimorar minhas habilidades e aprender novas tecnologias para entregar projetos de alta qualidade.</p>
              <p>Minha abordagem de desenvolvimento é centrada no usuário, priorizando a acessibilidade e a experiência do usuário em todos os projetos que desenvolvo.</p>
            </div>
            <div class="sobre-imagem">
              <img src="public/images/profile.jpg" alt="Foto de Valéria">
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

export default new AboutPage();
