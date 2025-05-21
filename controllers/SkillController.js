import SkillModel from '../models/SkillModel.js';
import SkillsPage from '../views/pages/SkillsPage.js';

/**
 * Controlador para a seção de Habilidades
 */
class SkillController {
  /**
   * Inicializa o controlador
   */
  initialize() {
    this.renderSkills();
    this.setupEventListeners();
  }

  /**
   * Renderiza a seção de habilidades
   */
  renderSkills() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    
    const skills = SkillModel.getAllSkills();
    mainContent.innerHTML = SkillsPage.render(skills);
  }

  /**
   * Configura os event listeners
   */
  setupEventListeners() {
    // Adicionar após renderização
    setTimeout(() => {
      // Adicionar animações
      const skillCards = document.querySelectorAll('.habilidade-card');
      skillCards.forEach(card => {
        card.classList.add('fade-in');
        this.observeElement(card);
      });
      
      // Animar barras de progresso quando visíveis
      this.setupProgressBarAnimation();
    }, 100);
  }

  /**
   * Configura animação das barras de progresso
   */
  setupProgressBarAnimation() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.style.width;
          
          // Reset e animar
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.transition = 'width 1s ease-in-out';
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

export default new SkillController();
