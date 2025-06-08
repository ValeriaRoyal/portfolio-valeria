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
});

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
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterButtons.length === 0 || projectCards.length === 0) return;
  
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
      
      // Atualiza o tabpanel
      const projectsGrid = document.querySelector('.projects-grid');
      if (projectsGrid) {
        projectsGrid.setAttribute('aria-labelledby', `filter-${filterValue}`);
      }
      
      // Filtra os projetos usando transições CSS
      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
          // Usa requestAnimationFrame para garantir que o display: block seja aplicado antes da transição
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          
          // Espera a transição terminar antes de esconder o elemento
          card.addEventListener('transitionend', function hideCard() {
            card.style.display = 'none';
            card.removeEventListener('transitionend', hideCard);
          }, { once: true });
        }
      });
    });
  });
}

// Configuração do formulário de contato
function setupContactForm() {
  const contactForm = document.querySelector('#contactForm');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validação do formulário
    const name = contactForm.querySelector('#name');
    const email = contactForm.querySelector('#email');
    const message = contactForm.querySelector('#message');
    
    if (!name.value.trim()) {
      showFormError(name, 'Por favor, informe seu nome');
      return;
    }
    
    if (!email.value.trim()) {
      showFormError(email, 'Por favor, informe seu email');
      return;
    }
    
    if (!isValidEmail(email.value)) {
      showFormError(email, 'Por favor, informe um email válido');
      return;
    }
    
    if (!message.value.trim()) {
      showFormError(message, 'Por favor, escreva uma mensagem');
      return;
    }
    
    // Simulação de envio bem-sucedido
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    console.log('Formulário enviado:', formValues);
    
    // Feedback visual
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (!submitButton) return;
    
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    
    // Aqui você pode adicionar a lógica para enviar o formulário
    // Por exemplo, usando fetch para enviar os dados para um backend
    
    // Simulação de envio
    setTimeout(() => {
      showFormSuccess();
      contactForm.reset();
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }, 1500);
  });
  
  // Limpa mensagens de erro quando o usuário começa a digitar
  const inputs = contactForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      clearFormError(input);
    });
  });
  
  function showFormError(input, message) {
    clearFormError(input);
    
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    errorMessage.setAttribute('aria-live', 'polite');
    
    formGroup.appendChild(errorMessage);
    input.setAttribute('aria-invalid', 'true');
    input.focus();
  }
  
  function clearFormError(input) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.remove('error');
    
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
      formGroup.removeChild(errorMessage);
    }
    
    input.setAttribute('aria-invalid', 'false');
  }
  
  function showFormSuccess() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
    successMessage.setAttribute('aria-live', 'polite');
    
    contactForm.insertAdjacentElement('beforebegin', successMessage);
    
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  }
  
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
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
