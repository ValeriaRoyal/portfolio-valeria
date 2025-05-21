import AboutPage from '../views/pages/AboutPage.js';

/**
 * Controlador para a seção Sobre
 */
class AboutController {
  /**
   * Inicializa o controlador
   */
  initialize() {
    this.renderAbout();
    this.setupEventListeners();
  }

  /**
   * Renderiza a seção Sobre
   */
  renderAbout() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    
    mainContent.innerHTML = AboutPage.render();
  }

  /**
   * Configura os event listeners
   */
  setupEventListeners() {
    // Adicionar após renderização
    setTimeout(() => {
      const sobreContent = document.querySelector('.sobre-content');
      if (sobreContent) {
        sobreContent.classList.add('fade-in');
        this.observeElement(sobreContent);
      }
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

export default new AboutController();
