/**
 * Página inicial que combina todas as seções
 */
class HomePage {
  /**
   * Renderiza a página inicial
   * @returns {string} HTML da página inicial
   */
  render() {
    return `
      <section id="hero">
        <div class="container">
          <div class="hero-content">
            <h2>Desenvolvedora Front-end</h2>
            <p>Criando experiências digitais acessíveis e intuitivas</p>
            <a href="#" data-section="projetos" class="btn">Ver Projetos</a>
          </div>
        </div>
      </section>
      
      <div id="main-content"></div>
    `;
  }
}

export default new HomePage();
