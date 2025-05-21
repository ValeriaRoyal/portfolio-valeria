/**
 * Página Sobre
 */
class AboutPage {
  /**
   * Renderiza a seção Sobre
   * @returns {string} HTML da seção Sobre
   */
  render() {
    return `
      <section id="sobre" aria-labelledby="sobre-heading">
        <div class="container">
          <div class="section-heading">
            <h2 id="sobre-heading">Sobre Mim</h2>
          </div>
          
          <div class="sobre-content">
            <div class="sobre-texto fade-up">
              <p>Olá! Sou Valéria, desenvolvedora front-end apaixonada por criar interfaces acessíveis e responsivas. Meu foco é desenvolver soluções que combinam design atraente com código limpo e eficiente.</p>
              
              <p>Com experiência em <strong>React</strong>, <strong>TypeScript</strong> e design de interfaces, busco constantemente aprimorar minhas habilidades e aprender novas tecnologias para entregar projetos de alta qualidade.</p>
              
              <p>Minha abordagem de desenvolvimento é centrada no usuário, priorizando a <strong>acessibilidade</strong> e a <strong>experiência do usuário</strong> em todos os projetos que desenvolvo.</p>
              
              <p>Atualmente, estou trabalhando em projetos que utilizam as seguintes tecnologias:</p>
              
              <ul class="skills-list">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>HTML5 & CSS3</li>
                <li>Styled Components</li>
              </ul>
            </div>
            
            <div class="sobre-imagem fade-up">
              <img src="public/images/profile.jpg" alt="Foto de Valéria" width="300" height="300">
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

export default new AboutPage();
