/**
 * Página de Contato
 */
class ContactPage {
  /**
   * Renderiza a seção de Contato
   * @param {Object} contactInfo - Informações de contato
   * @returns {string} HTML da seção de Contato
   */
  render(contactInfo) {
    return `
      <section id="contato" aria-labelledby="contato-heading">
        <div class="container">
          <h2 id="contato-heading">Contato</h2>
          <div class="contato-content">
            <div class="contato-info">
              <p>Estou disponível para novos projetos e oportunidades. Entre em contato comigo através dos canais abaixo:</p>
              <ul class="contato-lista">
                <li><i class="fas fa-envelope" aria-hidden="true"></i> <a href="mailto:${contactInfo.email}" aria-label="Enviar email para ${contactInfo.email}">${contactInfo.email}</a></li>
                <li><i class="fab fa-linkedin" aria-hidden="true"></i> <a href="${contactInfo.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil no LinkedIn">LinkedIn</a></li>
                <li><i class="fab fa-github" aria-hidden="true"></i> <a href="${contactInfo.github}" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil no GitHub">GitHub</a></li>
              </ul>
            </div>
            <form class="contato-form" id="contact-form" aria-labelledby="form-heading">
              <h3 id="form-heading" class="sr-only">Formulário de Contato</h3>
              <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" required aria-required="true">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required aria-required="true">
              </div>
              <div class="form-group">
                <label for="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows="5" required aria-required="true"></textarea>
              </div>
              <button type="submit" class="btn">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }
}

export default new ContactPage();
