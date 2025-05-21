/**
 * Gerencia a splash screen
 */
class SplashScreen {
  /**
   * Inicializa a splash screen
   */
  initialize() {
    const splashScreen = document.querySelector('.splash-screen');
    const progressBar = document.querySelector('.splash-progress-bar');
    
    if (!splashScreen || !progressBar) return;
    
    // Ativar a splash screen
    splashScreen.classList.add('active');
    
    // Simular progresso de carregamento
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Esconder a splash screen após o carregamento completo
        setTimeout(() => {
          splashScreen.classList.add('hidden');
          
          // Remover completamente após a transição
          setTimeout(() => {
            if (splashScreen.parentNode) {
              splashScreen.parentNode.removeChild(splashScreen);
            }
          }, 800);
        }, 500);
      }
      
      progressBar.style.width = `${progress}%`;
    }, 200);
  }
}

export default new SplashScreen();
