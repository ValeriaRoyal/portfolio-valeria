import SkillCard from '../components/SkillCard.js';

/**
 * Página de Habilidades
 */
class SkillsPage {
  /**
   * Renderiza a seção de Habilidades
   * @param {Array} skills - Lista de habilidades
   * @returns {string} HTML da seção de Habilidades
   */
  render(skills) {
    return `
      <section id="habilidades" aria-labelledby="habilidades-heading">
        <div class="container">
          <div class="section-heading">
            <h2 id="habilidades-heading">Habilidades</h2>
          </div>
          
          <p class="section-description">
            Ao longo da minha jornada como desenvolvedora, adquiri experiência com diversas tecnologias e ferramentas.
            Aqui estão algumas das minhas principais habilidades técnicas:
          </p>
          
          <div class="habilidades-grid">
            ${skills.map(skill => SkillCard.render(skill)).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

export default new SkillsPage();
