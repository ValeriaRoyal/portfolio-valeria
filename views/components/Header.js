/**
 * Componente de cabeçalho
 */
class Header {
  /**
   * Renderiza o cabeçalho
   * @param {string} activeSection - Seção ativa atual
   * @returns {string} HTML do cabeçalho
   */
  render(activeSection = '') {
    return `
      <header>
        <div class="container">
          <h1>Valéria</h1>
          <nav>
            <ul>
              <li><a href="#" data-section="sobre" class="${activeSection === 'sobre' ? 'active' : ''}">Sobre</a></li>
              <li><a href="#" data-section="projetos" class="${activeSection === 'projetos' ? 'active' : ''}">Projetos</a></li>
              <li><a href="#" data-section="habilidades" class="${activeSection === 'habilidades' ? 'active' : ''}">Habilidades</a></li>
              <li><a href="#" data-section="contato" class="${activeSection === 'contato' ? 'active' : ''}">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

export default new Header();
