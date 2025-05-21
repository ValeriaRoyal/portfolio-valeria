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
            <h1 id="hero-heading" class="hero-name">Valéria Regina.</h1>
            <h2 class="hero-subtitle">Analista de Sistemas & UX Designer.</h2>
            <p class="hero-description">
              Sou uma profissional especializada em desenvolvimento de software, testes de qualidade e design UX.
              Atualmente, estou focada em criar soluções digitais que combinam qualidade técnica com excelente experiência do usuário.
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
