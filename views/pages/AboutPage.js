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
              <p>Apaixonada por tecnologia e com perfil analítico e criativo, sou Analista de Sistemas formada pela Fatec Praia Grande com 3 anos de experiência na área. Minha trajetória profissional é marcada por <strong>comunicação clara e objetiva, espírito de equipe e comprometimento com o aprendizado contínuo.</strong></p>
              
              <p>Em minha jornada, tive a oportunidade de atuar em projetos de alta criticidade na área de Serviços Financeiros, onde adquiri experiência em <strong>desenvolvimento de software, testes de qualidade (QA) e Design UX</strong>. A cada desafio, busquei me aprimorar e expandir minhas habilidades, trilhando um caminho sólido com foco em <strong>Design e Qualidade de Software</strong>.</p>
              
              <p><strong>Acredito que a união de diferentes perspectivas e conhecimentos gera soluções inovadoras e eficientes.</strong> Por isso, busco constantemente aprimorar minhas habilidades e me manter atualizada com as últimas tendências do mercado.</p>
              
              <p>Além da formação acadêmica, participo ativamente de cursos, palestras e conferências relacionadas à minha área de atuação. Essa busca constante por conhecimento me permite oferecer um trabalho abrangente, de qualidade e com <strong>foco nas necessidades do cliente</strong>.</p>
              
              <p>Atualmente, trabalho com as seguintes tecnologias:</p>
              
              <ul class="skills-list">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>HTML5 & CSS3</li>
                <li>Testes Automatizados</li>
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
