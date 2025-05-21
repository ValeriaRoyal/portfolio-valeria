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
    
    // Adicionar classe para animação após renderização
    setTimeout(() => {
      this.animateElements();
    }, 100);
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
    }, 100);
  }

  /**
   * Anima os elementos da página
   */
  animateElements() {
    // Animar elementos com fade-up
    const fadeElements = document.querySelectorAll('.fade-up');
    this.setupStaggeredAnimation(fadeElements, 100);
    
    // Animar barras de progresso quando visíveis
    const progressBars = document.querySelectorAll('.skill-progress');
    if (progressBars.length) {
      this.setupProgressBarAnimation(progressBars);
    }
  }

  /**
   * Configura animação com atraso entre elementos
   * @param {NodeList} elements - Elementos a serem animados
   * @param {number} delay - Atraso entre elementos em ms
   */
  setupStaggeredAnimation(elements, delay = 100) {
    elements.forEach((el, index) => {
      setTimeout(() => {
        this.observeElement(el);
      }, index * delay);
    });
  }

  /**
   * Configura animação das barras de progresso
   * @param {NodeList} progressBars - Barras de progresso
   */
  setupProgressBarAnimation(progressBars) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.style.width;
          
          // Reset e animar
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = width;
          }, 100);
          
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.1 });
    
    progressBars.forEach(bar => observer.observe(bar));
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
