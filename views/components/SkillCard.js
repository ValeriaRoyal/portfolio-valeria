/**
 * Componente de card de habilidade
 */
class SkillCard {
  /**
   * Renderiza um card de habilidade
   * @param {Object} skill - Dados da habilidade
   * @returns {string} HTML do card de habilidade
   */
  render(skill) {
    return `
      <div class="habilidade-card" data-id="${skill.id}">
        <i class="${skill.icon}"></i>
        <h3>${skill.name}</h3>
        <div class="skill-level">
          <div class="skill-bar">
            <div class="skill-progress" style="width: ${skill.level}%"></div>
          </div>
          <span class="skill-percentage">${skill.level}%</span>
        </div>
      </div>
    `;
  }
}

export default new SkillCard();
