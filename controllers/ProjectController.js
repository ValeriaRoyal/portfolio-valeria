import ProjectModel from '../models/ProjectModel.js';
import ProjectsPage from '../views/pages/ProjectsPage.js';

/**
 * Controlador para a seção de Projetos
 */
class ProjectController {
  /**
   * Inicializa o controlador
   */
  initialize() {
    this.renderProjects();
    this.setupEventListeners();
  }

  /**
   * Renderiza a seção de projetos
   * @param {string} filter - Filtro opcional por tecnologia
   */
  renderProjects(filter = '') {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    
    const projects = filter 
      ? ProjectModel.getProjectsByTechnology(filter)
      : ProjectModel.getAllProjects();
    
    mainContent.innerHTML = ProjectsPage.render(projects);
  }

  /**
   * Configura os event listeners
   */
  setupEventListeners() {
    // Adicionar após renderização
    setTimeout(() => {
      const filterSelect = document.getElementById('filtro-tech');
      if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
          this.renderProjects(e.target.value);
        });
      }
      
      // Adicionar animações
      const projectCards = document.querySelectorAll('.projeto-card');
      projectCards.forEach(card => {
        card.classList.add('fade-in');
        this.observeElement(card);
      });
    }, 100);
  }

  /**
   * Observa um elemento para animação de entrada
   * @param {HTMLElement} element - Elemento a ser observado
   */
  observeElement(element) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(element);
  }
}

export default new ProjectController();
