/**
 * Animação inspirada no menu principal do PlayStation 2
 */
class PS2Animation {
  /**
   * Inicializa a animação do PS2
   */
  initialize() {
    const splashScreen = document.querySelector('.splash-screen');
    if (!splashScreen) return;
    
    // Limpar o conteúdo atual do splash screen
    splashScreen.innerHTML = '';
    
    // Criar o container da animação
    const ps2Container = document.createElement('div');
    ps2Container.className = 'ps2-container';
    
    // Criar os cubos flutuantes (torres)
    for (let i = 0; i < 12; i++) {
      const tower = document.createElement('div');
      tower.className = 'ps2-tower';
      tower.style.animationDelay = `${i * 0.2}s`;
      ps2Container.appendChild(tower);
    }
    
    // Criar o logo
    const logo = document.createElement('div');
    logo.className = 'ps2-logo';
    logo.innerHTML = '<span>V</span>aléria';
    
    // Criar o texto "Sony Computer Entertainment"
    const tagline = document.createElement('div');
    tagline.className = 'ps2-tagline';
    tagline.textContent = 'Analista de Sistemas & UX Designer';
    
    // Adicionar elementos ao splash screen
    splashScreen.appendChild(ps2Container);
    splashScreen.appendChild(logo);
    splashScreen.appendChild(tagline);
    
    // Iniciar a animação de carregamento
    setTimeout(() => {
      const towers = document.querySelectorAll('.ps2-tower');
      towers.forEach(tower => {
        tower.classList.add('animate');
      });
      
      // Mostrar o logo após as torres aparecerem
      setTimeout(() => {
        logo.classList.add('visible');
        tagline.classList.add('visible');
        
        // Esconder o splash screen após a animação completa
        setTimeout(() => {
          splashScreen.classList.add('hidden');
          
          // Remover completamente após a transição e garantir que o conteúdo seja renderizado
          setTimeout(() => {
            if (splashScreen.parentNode) {
              splashScreen.parentNode.removeChild(splashScreen);
              
              // Disparar um evento personalizado para notificar que a animação terminou
              const event = new CustomEvent('ps2AnimationComplete');
              document.dispatchEvent(event);
            }
          }, 800);
        }, 3000);
      }, 2000);
    }, 500);
  }
}

export default new PS2Animation();
