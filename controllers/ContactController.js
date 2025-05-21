import ContactModel from '../models/ContactModel.js';
import ContactPage from '../views/pages/ContactPage.js';

/**
 * Controlador para a seção de Contato
 */
class ContactController {
  /**
   * Inicializa o controlador
   */
  initialize() {
    this.renderContact();
    this.setupEventListeners();
  }

  /**
   * Renderiza a seção de contato
   */
  renderContact() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    
    const contactInfo = ContactModel.getContactInfo();
    mainContent.innerHTML = ContactPage.render(contactInfo);
  }

  /**
   * Configura os event listeners
   */
  setupEventListeners() {
    // Adicionar após renderização
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.addEventListener('submit', this.handleFormSubmit.bind(this));
      }
      
      // Adicionar animações
      const contatoContent = document.querySelector('.contato-content');
      if (contatoContent) {
        contatoContent.classList.add('fade-in');
        this.observeElement(contatoContent);
      }
    }, 100);
  }

  /**
   * Manipula o envio do formulário
   * @param {Event} e - Evento de submit
   */
  handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    const message = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      mensagem: formData.get('mensagem')
    };
    
    // Salvar mensagem no modelo
    const success = ContactModel.saveMessage(message);
    
    if (success) {
      // Mostrar mensagem de sucesso
      this.showSuccessMessage(message.nome, form);
    } else {
      // Mostrar erro
      this.showErrorMessage(form);
    }
  }

  /**
   * Mostra mensagem de sucesso
   * @param {string} nome - Nome do remetente
   * @param {HTMLFormElement} form - Formulário
   */
  showSuccessMessage(nome, form) {
    // Criar elemento de mensagem de sucesso
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
      <p>Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.</p>
      <p>Entrarei em contato em breve!</p>
    `;
    
    // Limpar formulário e mostrar mensagem
    form.reset();
    form.style.display = 'none';
    form.parentNode.appendChild(successMessage);
    
    // Restaurar formulário após alguns segundos
    setTimeout(() => {
      successMessage.remove();
      form.style.display = 'block';
    }, 5000);
  }

  /**
   * Mostra mensagem de erro
   * @param {HTMLFormElement} form - Formulário
   */
  showErrorMessage(form) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.innerHTML = `
      <p>Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.</p>
    `;
    
    form.parentNode.insertBefore(errorMessage, form);
    
    setTimeout(() => {
      errorMessage.remove();
    }, 5000);
  }

  /**
   * Observa um elemento para animação de entrada
   * @param {HTMLElement} element - Elemento a ser observado
   */
  observeElement(element) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(element);
  }
}

export default new ContactController();
