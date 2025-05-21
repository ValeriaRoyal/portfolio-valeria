import Router from './Router.js';
import AboutController from './AboutController.js';
import ProjectController from './ProjectController.js';
import SkillController from './SkillController.js';
import ContactController from './ContactController.js';
import Header from '../views/components/Header.js';
import Footer from '../views/components/Footer.js';
import HomePage from '../views/pages/HomePage.js';
import ContactModel from '../models/ContactModel.js';
import AccessibilityManager from '../js/accessibility.js';
import PS2Animation from '../js/ps2Animation.js';

/**
 * Controlador principal da aplicação
 */
class AppController {
  /**
   * Inicializa a aplicação
   */
  initialize() {
    // Inicializar animação do PS2
    PS2Animation.initialize();
    
    // Mostrar loader
    this.showLoader();
    
    // Registrar rotas
    Router.addRoute('sobre', AboutController);
    Router.addRoute('projetos', ProjectController);
    Router.addRoute('habilidades', SkillController);
    Router.addRoute('contato', ContactController);
    
    // Renderizar estrutura base
    this.renderApp();
    
    // Inicializar gerenciador de acessibilidade
    AccessibilityManager.initialize();
    
    // Executar testes de acessibilidade
    AccessibilityManager.runAccessibilityTests();
    
    // Aguardar o evento de conclusão da animação do PS2 para navegar para a seção inicial
    document.addEventListener('ps2AnimationComplete', () => {
      // Navegar para a seção inicial
      Router.navigateTo('sobre');
      
      // Esconder loader quando tudo estiver carregado
      this.hideLoader();
    });
    
    // Esconder loader quando tudo estiver carregado (fallback)
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.hideLoader();
        
        // Garantir que a navegação para a seção inicial ocorra
        if (!Router.getCurrentSection()) {
          Router.navigateTo('sobre');
        }
      }, 6000); // Tempo suficiente para a animação do PS2 terminar
    });
  }

  /**
   * Renderiza a estrutura base da aplicação
   */
  renderApp() {
    const app = document.getElementById('app');
    if (!app) return;
    
    // Renderizar cabeçalho
    const headerHtml = Header.render(Router.getCurrentSection());
    
    // Renderizar página inicial
    const homeHtml = HomePage.render();
    
    // Renderizar rodapé
    const contactInfo = ContactModel.getContactInfo();
    const footerHtml = Footer.render(contactInfo);
    
    // Combinar tudo
    app.innerHTML = `
      ${headerHtml}
      ${homeHtml}
      <main id="main-content">
      </main>
      ${footerHtml}
    `;
    
    // Configurar detecção de scroll para o cabeçalho
    this.setupScrollDetection();
  }

  /**
   * Configura detecção de scroll para o cabeçalho
   */
  setupScrollDetection() {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (!header) return;
      
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  /**
   * Mostra o loader
   */
  showLoader() {
    let loader = document.querySelector('.loading');
    
    if (!loader) {
      loader = document.createElement('div');
      loader.className = 'loading';
      loader.innerHTML = '<div class="loader"></div>';
      document.body.appendChild(loader);
    }
    
    loader.classList.remove('hidden');
  }

  /**
   * Esconde o loader
   */
  hideLoader() {
    const loader = document.querySelector('.loading');
    if (loader) {
      loader.classList.add('hidden');
      
      // Remover completamente após a transição
      setTimeout(() => {
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 500);
    }
  }
}

export default new AppController();
