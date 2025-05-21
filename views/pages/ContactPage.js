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
          <div class="contato-content fade-up">
            <p class="contato-intro">E agora?</p>
            <h2 id="contato-heading" class="contato-heading">Entre em Contato</h2>
            <p class="contato-description">
              Estou sempre aberta a novas oportunidades e colaborações. Se você tem um projeto em mente, 
              uma pergunta ou apenas quer dizer olá, ficarei feliz em conversar!
            </p>
            
            <a href="mailto:${contactInfo.email}" class="btn" aria-label="Enviar email para ${contactInfo.email}">
              Diga Olá
            </a>
            
            <ul class="contato-lista">
              <li>
                <a href="mailto:${contactInfo.email}" aria-label="Enviar email para ${contactInfo.email}">
                  <i class="fas fa-envelope" aria-hidden="true"></i>
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href="${contactInfo.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil no LinkedIn">
                  <i class="fab fa-linkedin" aria-hidden="true"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="${contactInfo.github}" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil no GitHub">
                  <i class="fab fa-github" aria-hidden="true"></i>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    `;
  }
}

export default new ContactPage();
