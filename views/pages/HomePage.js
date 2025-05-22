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
            <h2 class="hero-subtitle">Front-End Engineer & UX/UI Designer.</h2>
            <p class="hero-description">
              Sou uma profissional com perfil analítico e criativo, destacando-me pela comunicação clara, 
              colaboração e comprometimento com o aprendizado contínuo. Valorizo a união de diferentes perspectivas para criar soluções 
              inovadoras e compartilhar conhecimento. Minha experiência em projetos de alta criticidade reforça minha habilidade de 
              trabalhar em equipe para alcançar o sucesso.
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
