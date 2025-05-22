/**
 * Modelo para gerenciar os dados dos projetos
 */
class ProjectModel {
  constructor() {
    this.projects = [
      {
        id: 1,
        title: 'Sistema de Gestão Financeira',
        description: 'Aplicação web para controle financeiro pessoal e empresarial com foco em acessibilidade e experiência do usuário. Permite gerenciar receitas, despesas, orçamentos e metas financeiras com relatórios detalhados e dashboards personalizáveis.',
        image: 'public/images/projeto1.jpg',
        technologies: ['React', 'TypeScript', 'Styled Components', 'Jest', 'Node.js'],
        github: 'https://github.com/ValeriaRoyal/financas-pessoais',
        demo: '#',
        featured: true
      },
      // {
      //   id: 2,
      //   title: 'Plataforma E-commerce',
      //   description: 'Loja virtual responsiva com carrinho de compras, sistema de pagamento integrado e painel administrativo para gerenciamento de produtos. Implementação de testes automatizados e otimização de performance.',
      //   image: 'public/images/projeto2.jpg',
      //   technologies: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express', 'MongoDB'],
      //   github: '#',
      //   demo: '#'
      // },
      // {
      //   id: 3,
      //   title: 'Aplicativo de Produtividade',
      //   description: 'Aplicativo de gerenciamento de tarefas com funcionalidades de arrastar e soltar, categorização, lembretes e sincronização entre dispositivos. Design focado em usabilidade e experiência do usuário.',
      //   image: 'public/images/projeto3.jpg',
      //   technologies: ['React Native', 'JavaScript', 'Firebase', 'Redux'],
      //   github: '#',
      //   demo: '#'
      // },
      // {
      //   id: 4,
      //   title: 'Dashboard Analítico',
      //   description: 'Painel de visualização de dados com gráficos interativos e relatórios personalizáveis. Integração com múltiplas fontes de dados e exportação em diversos formatos.',
      //   image: 'public/images/projeto4.jpg',
      //   technologies: ['React', 'D3.js', 'Node.js', 'Express', 'PostgreSQL'],
      //   github: '#',
      //   demo: '#'
      // }
    ];
  }

  /**
   * Retorna todos os projetos
   * @returns {Array} Lista de projetos
   */
  getAllProjects() {
    return this.projects;
  }

  /**
   * Retorna um projeto específico pelo ID
   * @param {number} id - ID do projeto
   * @returns {Object|null} Projeto encontrado ou null
   */
  getProjectById(id) {
    return this.projects.find(project => project.id === parseInt(id)) || null;
  }

  /**
   * Filtra projetos por tecnologia
   * @param {string} tech - Tecnologia para filtrar
   * @returns {Array} Lista de projetos filtrados
   */
  getProjectsByTechnology(tech) {
    if (!tech) return this.projects;
    return this.projects.filter(project => 
      project.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase()))
    );
  }

  /**
   * Retorna projetos em destaque
   * @returns {Array} Lista de projetos em destaque
   */
  getFeaturedProjects() {
    return this.projects.filter(project => project.featured);
  }
}

export default new ProjectModel();
