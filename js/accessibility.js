/**
 * Módulo para gerenciar funcionalidades de acessibilidade
 */
class AccessibilityManager {
  /**
   * Inicializa o gerenciador de acessibilidade
   */
  initialize() {
    this.addSkipToContentLink();
    this.ensureCorrectARIA();
    this.setupFocusVisibility();
  }

  /**
   * Adiciona um link "Pular para o conteúdo" para acessibilidade por teclado
   */
  addSkipToContentLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Pular para o conteúdo principal';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Adicionar ID ao conteúdo principal
    setTimeout(() => {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.setAttribute('tabindex', '-1');
      }
    }, 1000);
  }

  /**
   * Garante que os atributos ARIA estejam corretos
   */
  ensureCorrectARIA() {
    // Adicionar roles e atributos ARIA apropriados
    setTimeout(() => {
      // Adicionar role="navigation" ao menu principal
      const nav = document.querySelector('nav');
      if (nav) nav.setAttribute('role', 'navigation');
      
      // Adicionar aria-current à página atual
      const currentSection = document.querySelector('a.active');
      if (currentSection) currentSection.setAttribute('aria-current', 'page');
      
      // Garantir que botões tenham roles apropriados
      document.querySelectorAll('button').forEach(button => {
        if (!button.getAttribute('aria-label') && button.textContent.trim() === '') {
          const icon = button.querySelector('i');
          if (icon) {
            const className = icon.className;
            if (className.includes('github')) button.setAttribute('aria-label', 'GitHub');
            else if (className.includes('linkedin')) button.setAttribute('aria-label', 'LinkedIn');
            else if (className.includes('twitter')) button.setAttribute('aria-label', 'Twitter');
          }
        }
      });
    }, 1000);
  }

  /**
   * Configura visibilidade de foco para navegação por teclado
   */
  setupFocusVisibility() {
    // Adicionar classe ao body quando usuário estiver navegando por teclado
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-user');
      }
    });
    
    // Remover classe quando usuário usar mouse
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-user');
    });
  }

  /**
   * Executa testes de acessibilidade usando Axe
   */
  runAccessibilityTests() {
    if (typeof axe !== 'undefined') {
      setTimeout(() => {
        axe.run().then(results => {
          if (results.violations.length) {
            console.group('Axe-core para testes de acessibilidade está ativo');
            console.log('New axe issues');
            
            results.violations.forEach(violation => {
              console.log(`${violation.impact}: ${violation.help} ${violation.helpUrl}`);
              
              violation.nodes.forEach(node => {
                console.log('Element:', node.element);
                console.log('HTML:', node.html);
                console.log(node.failureSummary);
              });
            });
            
            console.groupEnd();
          } else {
            console.log('Parabéns! Nenhum problema de acessibilidade encontrado.');
          }
        });
      }, 2000);
    }
  }
}

export default new AccessibilityManager();
