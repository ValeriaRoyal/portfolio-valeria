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
      <section id="hero" aria-labelledby="hero-heading">
        <div class="container">
          <div class="hero-content">
            <h2 id="hero-heading">Desenvolvedora Front-end</h2>
            <p>Criando experiências digitais acessíveis e intuitivas</p>
            <a href="#" data-section="projetos" class="btn" role="button">Ver Projetos</a>
          </div>
        </div>
      </section>
    `;
  }
}

export default new HomePage();
