/**
 * Controlador de rotas para navegação SPA
 */
class Router {
  constructor() {
    this.routes = {};
    this.currentSection = 'sobre';
    
    // Inicializar eventos de navegação
    window.addEventListener('DOMContentLoaded', () => {
      this.setupNavigation();
    });
  }

  /**
   * Adiciona uma rota
   * @param {string} path - Caminho da rota
   * @param {Object} controller - Controlador associado à rota
   */
  addRoute(path, controller) {
    this.routes[path] = controller;
  }

  /**
   * Configura eventos de navegação
   */
  setupNavigation() {
    document.addEventListener('click', (e) => {
      // Verificar se o clique foi em um link de navegação
      if (e.target && e.target.matches('a[data-section]')) {
        e.preventDefault();
        const section = e.target.getAttribute('data-section');
        this.navigateTo(section);
      }
    });
  }

  /**
   * Navega para uma seção específica
   * @param {string} section - Nome da seção
   */
  navigateTo(section) {
    if (this.routes[section]) {
      this.currentSection = section;
      this.routes[section].initialize();
      
      // Atualizar links ativos
      document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('data-section') === section) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  /**
   * Retorna a seção atual
   * @returns {string} Nome da seção atual
   */
  getCurrentSection() {
    return this.currentSection;
  }
}

export default new Router();
