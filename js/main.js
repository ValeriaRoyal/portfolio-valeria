// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animação de entrada para elementos quando entram na viewport
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Adicionar classe para animação aos elementos
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar classe para animação aos elementos
    const animateElements = document.querySelectorAll('.projeto-card, .habilidade-card, .sobre-content, .contato-content');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Formulário de contato
    const contactForm = document.querySelector('.contato-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você adicionaria a lógica para enviar o formulário
            // Por enquanto, apenas mostraremos uma mensagem de sucesso simulada
            
            const formData = new FormData(this);
            const nome = formData.get('nome');
            
            // Criar elemento de mensagem de sucesso
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <p>Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.</p>
                <p>Entrarei em contato em breve!</p>
            `;
            
            // Limpar formulário e mostrar mensagem
            this.reset();
            this.style.display = 'none';
            this.parentNode.appendChild(successMessage);
            
            // Restaurar formulário após alguns segundos
            setTimeout(() => {
                successMessage.remove();
                this.style.display = 'block';
            }, 5000);
        });
    }
    
    // Adicionar estilos CSS para animações
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .success-message {
            background-color: var(--success);
            color: white;
            padding: 20px;
            border-radius: var(--border-radius);
            margin-top: 20px;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
});

// Detectar scroll para adicionar classe à header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Adicionar estilo para header com scroll
const headerStyle = document.createElement('style');
headerStyle.textContent = `
    header.scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(headerStyle);
