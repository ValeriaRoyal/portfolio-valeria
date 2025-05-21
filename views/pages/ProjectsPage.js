import ProjectCard from '../components/ProjectCard.js';

/**
 * Página de Projetos
 */
class ProjectsPage {
  /**
   * Renderiza a seção de Projetos
   * @param {Array} projects - Lista de projetos
   * @returns {string} HTML da seção de Projetos
   */
  render(projects) {
    // Separar projetos em destaque e outros projetos
    const featuredProjects = projects.slice(0, 1);
    const otherProjects = projects.slice(1);

    return `
      <section id="projetos" aria-labelledby="projetos-heading">
        <div class="container">
          <div class="section-heading">
            <h2 id="projetos-heading">Projetos</h2>
          </div>
          
          <!-- Projetos em destaque -->
          <div class="projetos-destaque">
            ${featuredProjects.map((project, index) => 
              ProjectCard.renderFeatured(project, index % 2 !== 0)
            ).join('')}
          </div>
          
          <!-- Outros projetos -->
          <h3 class="outros-projetos-heading">Outros Projetos</h3>
          
          <div class="filtro-projetos">
            <label for="filtro-tech">Filtrar por tecnologia:</label>
            <select id="filtro-tech">
              <option value="">Todos</option>
              <option value="react">React</option>
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="node">Node.js</option>
            </select>
          </div>
          
          <div class="projetos-grid">
            ${otherProjects.map(project => ProjectCard.render(project)).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

export default new ProjectsPage();
