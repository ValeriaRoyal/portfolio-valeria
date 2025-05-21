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
      <div class="habilidade-card fade-up" data-id="${skill.id}">
        <i class="${skill.icon}" aria-hidden="true"></i>
        <h3>${skill.name}</h3>
        <div class="skill-level">
          <div class="skill-bar" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100">
            <div class="skill-progress" style="width: ${skill.level}%"></div>
          </div>
          <div class="skill-percentage">
            <span>Proficiência</span>
            <span>${skill.level}%</span>
          </div>
        </div>
      </div>
    `;
  }
}

export default new SkillCard();
