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
          <div class="hero-content fade-up">
            <p class="hero-intro">Olá, meu nome é</p>
            <h1 id="hero-heading" class="hero-name">Valéria.</h1>
            <h2 class="hero-subtitle">Eu construo experiências digitais.</h2>
            <p class="hero-description">
              Sou uma desenvolvedora front-end especializada em criar interfaces acessíveis e responsivas.
              Atualmente, estou focada em construir produtos digitais que combinam design atraente com código limpo e eficiente.
            </p>
            <div class="hero-cta">
              <a href="#" data-section="projetos" class="btn" role="button">Ver Projetos</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

export default new HomePage();
