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
    return `
      <footer>
        <div class="container">
          <p>&copy; 2025 Valéria. Todos os direitos reservados.</p>
          <div class="social-links">
            <a href="${contactInfo.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            <a href="${contactInfo.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
            <a href="${contactInfo.twitter}" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>
    `;
  }
}

export default new Footer();
