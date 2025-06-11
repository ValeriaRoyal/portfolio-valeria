// Inicialização da biblioteca AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa as animações AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
  });

  // Navegação
  setupNavigation();
  
  // Filtro de projetos
  setupProjectFilters();
  
  // Inicializa o Swiper para os projetos
  setupProjectsSwiper();
  
  // Inicializa o Swiper para os depoimentos
  setupTestimonialsSwiper();
  
  // Configuração do tema claro/escuro
  setupThemeToggle();
  
  // Configuração da animação de texto digitado
  setupTypingAnimation();
});

// Configuração do Swiper para os projetos
function setupProjectsSwiper() {
  const projectsSwiper = new Swiper('.projects-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      // Quando a largura da tela for >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Quando a largura da tela for >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    a11y: {
      prevSlideMessage: 'Projeto anterior',
      nextSlideMessage: 'Próximo projeto',
      firstSlideMessage: 'Este é o primeiro projeto',
      lastSlideMessage: 'Este é o último projeto',
      paginationBulletMessage: 'Ir para o projeto {{index}}',
    }
  });
  
  // Salva a referência do swiper para uso global
  window.projectsSwiper = projectsSwiper;
}

// Configuração do Swiper para os depoimentos
function setupTestimonialsSwiper() {
  const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Quando a largura da tela for >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Quando a largura da tela for >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    a11y: {
      prevSlideMessage: 'Depoimento anterior',
      nextSlideMessage: 'Próximo depoimento',
      firstSlideMessage: 'Este é o primeiro depoimento',
      lastSlideMessage: 'Este é o último depoimento',
      paginationBulletMessage: 'Ir para o depoimento {{index}}',
    }
  });
}

// Configuração da navegação
function setupNavigation() {
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');
  
  if (!header || !menuToggle || !navLinks) return;
  
  // Adiciona classe 'scrolled' ao header quando a página é rolada
  const handleScroll = debounce(() => {
    if (window.scrollY > 100) {
      header.style.padding = '0.8rem 0';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.padding = '1.5rem 0';
      header.style.boxShadow = 'none';
    }
    
    // Atualiza link ativo baseado na seção visível
    updateActiveLink();
  }, 20);
  
  window.addEventListener('scroll', handleScroll);
  
  // Toggle do menu mobile
  menuToggle.addEventListener('click', () => {
    const isExpanded = navLinks.classList.contains('active');
    navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    
    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });
  
  // Fecha o menu ao clicar em um link (mobile)
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    });
  });
  
  // Atualiza o link ativo no menu baseado na seção visível
  function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        links.forEach(link => {
          link.classList.remove('active');
          link.setAttribute('aria-current', 'false');
          
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          }
        });
      }
    });
  }
}

// Configuração dos filtros de projetos
function setupProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectSlides = document.querySelectorAll('.swiper-slide');
  
  if (filterButtons.length === 0 || projectSlides.length === 0) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove classe 'active' de todos os botões
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      
      // Adiciona classe 'active' ao botão clicado
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      
      const filterValue = button.getAttribute('data-filter');
      
      // Filtra os slides de projetos
      let visibleSlidesCount = 0;
      
      projectSlides.forEach((slide, index) => {
        const projectCard = slide.querySelector('.project-card');
        if (!projectCard) return;
        
        const category = projectCard.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          slide.classList.remove('hidden-slide');
          visibleSlidesCount++;
        } else {
          slide.classList.add('hidden-slide');
        }
      });
      
      // Reinicializa o Swiper para ajustar ao novo layout
      if (window.projectsSwiper) {
        window.projectsSwiper.destroy();
        
        // Recria o Swiper apenas com os slides visíveis
        setTimeout(() => {
          setupProjectsSwiper();
          
          // Se não houver slides visíveis, mostra uma mensagem
          const projectsContainer = document.querySelector('.projects-swiper');
          const noProjectsMessage = document.querySelector('.no-projects-message');
          
          if (visibleSlidesCount === 0) {
            if (!noProjectsMessage) {
              const message = document.createElement('div');
              message.className = 'no-projects-message';
              message.textContent = 'Nenhum projeto encontrado nesta categoria.';
              projectsContainer.appendChild(message);
            }
          } else if (noProjectsMessage) {
            noProjectsMessage.remove();
          }
        }, 100);
      }
    });
  });
}

// Configuração do tema claro/escuro
function setupThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  
  if (!themeToggle) return;
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    const themeIcon = themeToggle.querySelector('i');
    const srText = themeToggle.querySelector('.sr-only');
    
    if (!themeIcon || !srText) return;
    
    if (isDarkMode) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      srText.textContent = 'Mudar para tema claro';
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      srText.textContent = 'Mudar para tema escuro';
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Verifica o tema salvo no localStorage
  const savedTheme = localStorage.getItem('theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (prefersDarkScheme && !savedTheme)) {
    document.body.classList.add('dark-mode');
    const themeIcon = themeToggle.querySelector('i');
    const srText = themeToggle.querySelector('.sr-only');
    
    if (themeIcon && srText) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      srText.textContent = 'Mudar para tema claro';
    }
  }
}

// Configuração da animação de texto digitado
function setupTypingAnimation() {
  const typedElement = document.querySelector('.typed-text');
  if (!typedElement) return;
  
  // Verifica se o usuário prefere movimento reduzido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
  
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

// Adiciona acessibilidade ao teclado para elementos interativos
function setupKeyboardAccessibility() {
  // Torna os elementos div com role="button" acessíveis por teclado
  const keyboardInteractiveElements = document.querySelectorAll('[role="button"]');
  
  keyboardInteractiveElements.forEach(element => {
    if (!element.getAttribute('tabindex')) {
      element.setAttribute('tabindex', '0');
    }
    
    element.addEventListener('keydown', (e) => {
      // Ativa o elemento quando Enter ou Space é pressionado
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        element.click();
      }
    });
  });
}

// Função de debounce para melhorar performance
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
