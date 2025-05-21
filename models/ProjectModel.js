/**
 * Modelo para gerenciar os dados dos projetos
 */
class ProjectModel {
  constructor() {
    this.projects = [
      {
        id: 1,
        title: 'Finanças Pessoais',
        description: 'Aplicação web para controle financeiro pessoal com foco em acessibilidade e experiência do usuário. Permite gerenciar receitas, despesas, orçamentos e metas financeiras.',
        image: 'public/images/projeto1.jpg',
        technologies: ['React', 'TypeScript', 'Styled Components', 'Jest'],
        github: 'https://github.com/ValeriaRoyal/financas-pessoais',
        demo: '#',
        featured: true
      },
      {
        id: 2,
        title: 'E-commerce',
        description: 'Loja virtual responsiva com carrinho de compras, sistema de pagamento e painel administrativo para gerenciamento de produtos.',
        image: 'public/images/projeto2.jpg',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express'],
        github: '#',
        demo: '#'
      },
      {
        id: 3,
        title: 'App de Tarefas',
        description: 'Aplicativo de gerenciamento de tarefas com funcionalidades de arrastar e soltar, categorização e lembretes.',
        image: 'public/images/projeto3.jpg',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
        github: '#',
        demo: '#'
      },
      {
        id: 4,
        title: 'Blog Pessoal',
        description: 'Blog com sistema de gerenciamento de conteúdo, categorias, tags e comentários.',
        image: 'public/images/projeto4.jpg',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        github: '#',
        demo: '#'
      }
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
