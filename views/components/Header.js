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
          <nav role="navigation" aria-label="Menu principal">
            <ul>
              <li><a href="#" data-section="sobre" class="${activeSection === 'sobre' ? 'active' : ''}" ${activeSection === 'sobre' ? 'aria-current="page"' : ''}>Sobre</a></li>
              <li><a href="#" data-section="projetos" class="${activeSection === 'projetos' ? 'active' : ''}" ${activeSection === 'projetos' ? 'aria-current="page"' : ''}>Projetos</a></li>
              <li><a href="#" data-section="habilidades" class="${activeSection === 'habilidades' ? 'active' : ''}" ${activeSection === 'habilidades' ? 'aria-current="page"' : ''}>Habilidades</a></li>
              <li><a href="#" data-section="contato" class="${activeSection === 'contato' ? 'active' : ''}" ${activeSection === 'contato' ? 'aria-current="page"' : ''}>Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

export default new Header();
