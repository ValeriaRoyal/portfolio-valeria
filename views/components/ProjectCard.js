/**
 * Componente de card de projeto
 */
class ProjectCard {
  /**
   * Renderiza um card de projeto
   * @param {Object} project - Dados do projeto
   * @returns {string} HTML do card de projeto
   */
  render(project) {
    return `
      <div class="projeto-card" data-id="${project.id}">
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="projeto-tecnologias">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="projeto-links">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="${project.demo}" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i> Demo
          </a>
        </div>
      </div>
    `;
  }
}

export default new ProjectCard();
