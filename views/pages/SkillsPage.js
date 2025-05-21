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
      <section id="habilidades">
        <div class="container">
          <h2>Habilidades</h2>
          <div class="habilidades-grid">
            ${skills.map(skill => SkillCard.render(skill)).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

export default new SkillsPage();
