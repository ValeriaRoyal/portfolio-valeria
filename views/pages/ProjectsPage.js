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
    return `
      <section id="projetos">
        <div class="container">
          <h2>Projetos</h2>
          
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
            ${projects.map(project => ProjectCard.render(project)).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

export default new ProjectsPage();
