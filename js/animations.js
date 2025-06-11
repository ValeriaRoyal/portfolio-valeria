// Arquivo para animações avançadas
document.addEventListener('DOMContentLoaded', () => {
  // Animação de texto digitado na seção hero
  setupTypingAnimation();
  
  // Efeito de paralaxe na seção hero
  setupParallaxEffect();
});

// Animação de texto digitado
function setupTypingAnimation() {
  const typedElement = document.querySelector('.typed-text');
  if (!typedElement) return;
  
  const phrases = JSON.parse(typedElement.getAttribute('data-typed-items'));
  if (!phrases || !phrases.length) return;
  
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
      // Deletando texto
      typedElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      typingSpeed = 50; // Mais rápido ao deletar
    } else {
      // Digitando texto
      typedElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      typingSpeed = 100; // Mais lento ao digitar
    }
    
    // Lógica para alternar entre digitar e deletar
    if (!isDeleting && currentCharIndex === currentPhrase.length) {
      // Terminou de digitar, aguarda um pouco antes de começar a deletar
      isDeleting = true;
      typingSpeed = 1000; // Pausa antes de começar a deletar
    } else if (isDeleting && currentCharIndex === 0) {
      // Terminou de deletar, passa para a próxima frase
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pausa antes de começar a próxima frase
    }
    
    setTimeout(type, typingSpeed);
  }
  
  // Inicia a animação
  setTimeout(type, 1000);
}

// Efeito de paralaxe
function setupParallaxEffect() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;
  
  // Verifica se o usuário prefere movimento reduzido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < window.innerHeight) {
      const translateY = scrollPosition * 0.3;
      heroSection.style.backgroundPositionY = `calc(50% + ${translateY}px)`;
    }
  });
}
