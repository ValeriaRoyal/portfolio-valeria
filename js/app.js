// Inicialização da biblioteca AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa as animações AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Navegação
  setupNavigation();
  
  // Filtro de projetos
  setupProjectFilters();
  
  // Formulário de contato
  setupContactForm();
  
  // Configuração do tema claro/escuro
  setupThemeToggle();
});

// Configuração da navegação
function setupNavigation() {
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');
  
  if (!header || !menuToggle || !navLinks) return;
  
  // Adiciona classe 'scrolled' ao header quando a página é rolada
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.padding = '0.8rem 0';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.padding = '1.5rem 0';
      header.style.boxShadow = 'none';
    }
    
    // Atualiza link ativo baseado na seção visível
    updateActiveLink();
  });
  
  // Toggle do menu mobile
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
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
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Adiciona classe 'active' ao botão clicado
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      // Filtra os projetos
      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 200);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Configuração do formulário de contato
function setupContactForm() {
  const contactForm = document.querySelector('.contact-form');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aqui você pode adicionar a lógica para enviar o formulário
    // Por exemplo, usando fetch para enviar os dados para um backend
    
    // Simulação de envio bem-sucedido
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    console.log('Formulário enviado:', formValues);
    
    // Feedback visual (você pode personalizar isso)
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (!submitButton) return;
    
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
      contactForm.reset();
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }, 1500);
  });
}

// Configuração do tema claro/escuro
function setupThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  
  if (!themeToggle) return;
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    const themeIcon = themeToggle.querySelector('i');
    if (!themeIcon) return;
    
    if (document.body.classList.contains('dark-mode')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Verifica o tema salvo no localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    const themeIcon = themeToggle.querySelector('i');
    if (themeIcon) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  }
}
