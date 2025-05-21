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
          <a href="#" class="logo" aria-label="Início"><span>V</span>aléria</a>
          <nav role="navigation" aria-label="Menu principal">
            <ul>
              <li><a href="#" data-section="sobre" data-num="1" class="${activeSection === 'sobre' ? 'active' : ''}" ${activeSection === 'sobre' ? 'aria-current="page"' : ''}>Sobre</a></li>
              <li><a href="#" data-section="projetos" data-num="2" class="${activeSection === 'projetos' ? 'active' : ''}" ${activeSection === 'projetos' ? 'aria-current="page"' : ''}>Projetos</a></li>
              <li><a href="#" data-section="habilidades" data-num="3" class="${activeSection === 'habilidades' ? 'active' : ''}" ${activeSection === 'habilidades' ? 'aria-current="page"' : ''}>Habilidades</a></li>
              <li><a href="#" data-section="contato" data-num="4" class="${activeSection === 'contato' ? 'active' : ''}" ${activeSection === 'contato' ? 'aria-current="page"' : ''}>Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

export default new Header();
