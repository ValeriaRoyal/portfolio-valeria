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
      <article class="projeto-card" data-id="${project.id}">
        <img src="${project.image}" alt="${project.title}" width="300" height="200">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="projeto-tecnologias" aria-label="Tecnologias utilizadas">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="projeto-links">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="Ver código no GitHub do projeto ${project.title}">
            <i class="fab fa-github" aria-hidden="true"></i> GitHub
          </a>
          <a href="${project.demo}" target="_blank" rel="noopener noreferrer" aria-label="Ver demonstração do projeto ${project.title}">
            <i class="fas fa-external-link-alt" aria-hidden="true"></i> Demo
          </a>
        </div>
      </article>
    `;
  }
}

export default new ProjectCard();
