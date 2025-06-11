// Configuração das partículas flutuantes na seção hero
document.addEventListener('DOMContentLoaded', () => {
  // Verifica se o usuário prefere movimento reduzido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
  
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;
  
  // Cria o container de partículas
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  heroSection.appendChild(particlesContainer);
  
  // Configurações das partículas
  const particlesConfig = {
    count: 20,
    colors: ['#5951da', '#d4004d', '#6c757d'],
    minSize: 5,
    maxSize: 15,
    minDuration: 10,
    maxDuration: 30
  };
  
  // Cria as partículas
  for (let i = 0; i < particlesConfig.count; i++) {
    createParticle(particlesContainer, particlesConfig);
  }
});

// Função para criar uma partícula
function createParticle(container, config) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Tamanho aleatório
  const size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  // Posição inicial aleatória
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  
  // Cor aleatória da lista de cores
  const colorIndex = Math.floor(Math.random() * config.colors.length);
  particle.style.backgroundColor = config.colors[colorIndex];
  
  // Opacidade aleatória
  particle.style.opacity = Math.random() * 0.5 + 0.1;
  
  // Adiciona a partícula ao container
  container.appendChild(particle);
  
  // Anima a partícula
  animateParticle(particle, config);
}

// Função para animar uma partícula
function animateParticle(particle, config) {
  // Duração aleatória
  const duration = Math.random() * (config.maxDuration - config.minDuration) + config.minDuration;
  
  // Posição final aleatória
  const endPosX = Math.random() * 100;
  const endPosY = Math.random() * 100;
  
  // Configura a animação com CSS
  particle.style.transition = `all ${duration}s ease-in-out`;
  
  // Inicia a animação após um pequeno delay
  setTimeout(() => {
    particle.style.transform = 'translate(-50%, -50%)';
    particle.style.left = `${endPosX}%`;
    particle.style.top = `${endPosY}%`;
    
    // Quando a animação terminar, recria a partícula
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
        createParticle(particle.parentNode, config);
      }
    }, duration * 1000);
  }, 100);
}
