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
      <article class="projeto-card fade-up" data-id="${project.id}">
        <div class="projeto-card-header">
          <i class="far fa-folder-open folder-icon" aria-hidden="true"></i>
          <div class="projeto-links">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="Ver código no GitHub do projeto ${project.title}">
              <i class="fab fa-github" aria-hidden="true"></i>
            </a>
            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" aria-label="Ver demonstração do projeto ${project.title}">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="projeto-card-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="projeto-tecnologias" aria-label="Tecnologias utilizadas">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join(' ')}
          </div>
        </div>
      </article>
    `;
  }

  /**
   * Renderiza um projeto destaque
   * @param {Object} project - Dados do projeto
   * @param {boolean} isReversed - Se o layout deve ser invertido
   * @returns {string} HTML do projeto destaque
   */
  renderFeatured(project, isReversed = false) {
    return `
      <div class="projeto-destaque fade-up ${isReversed ? 'reversed' : ''}">
        <div class="projeto-destaque-content">
          <p class="projeto-destaque-overline">Projeto em Destaque</p>
          <h3 class="projeto-destaque-title">${project.title}</h3>
          <div class="projeto-destaque-description">
            <p>${project.description}</p>
          </div>
          <ul class="projeto-destaque-tech">
            ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
          </ul>
          <div class="projeto-destaque-links">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="Ver código no GitHub do projeto ${project.title}">
              <i class="fab fa-github" aria-hidden="true"></i>
            </a>
            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" aria-label="Ver demonstração do projeto ${project.title}">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="projeto-destaque-image">
          <img src="${project.image}" alt="Screenshot do projeto ${project.title}" width="600" height="400">
        </div>
      </div>
    `;
  }
}

export default new ProjectCard();
