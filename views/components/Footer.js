/**
 * Componente de rodapé
 */
class Footer {
  /**
   * Renderiza o rodapé
   * @param {Object} contactInfo - Informações de contato
   * @returns {string} HTML do rodapé
   */
  render(contactInfo) {
    const currentYear = new Date().getFullYear();
    
    return `
      <footer>
        <div class="container">
          <div class="social-links">
            <a href="${contactInfo.github}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
              <i class="fab fa-github" aria-hidden="true"></i>
            </a>
            <a href="${contactInfo.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
              <i class="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="${contactInfo.twitter}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter">
              <i class="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
          
          <p class="footer-text">
            &copy; ${currentYear} Valéria. Todos os direitos reservados.
          </p>
          
          <p class="footer-text">
            Desenvolvido com <span aria-hidden="true">❤️</span><span class="sr-only">amor</span> por <a href="${contactInfo.github}" target="_blank" rel="noopener noreferrer">Valéria</a>
          </p>
        </div>
      </footer>
    `;
  }
}

export default new Footer();
