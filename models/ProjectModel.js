/**
 * Modelo para gerenciar os dados dos projetos
 */
class ProjectModel {
  constructor() {
    this.projects = [
      {
        id: 1,
        title: 'Finanças Pessoais',
        description: 'Aplicação web para controle financeiro pessoal desenvolvida com React e TypeScript.',
        image: 'public/images/projeto1.jpg',
        technologies: ['React', 'TypeScript', 'Styled Components'],
        github: 'https://github.com/ValeriaRoyal/financas-pessoais',
        demo: '#'
      },
      {
        id: 2,
        title: 'E-commerce',
        description: 'Loja virtual responsiva com carrinho de compras e sistema de pagamento.',
        image: 'public/images/projeto2.jpg',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'Node.js'],
        github: '#',
        demo: '#'
      },
      {
        id: 3,
        title: 'App de Tarefas',
        description: 'Aplicativo de gerenciamento de tarefas com funcionalidades de arrastar e soltar.',
        image: 'public/images/projeto3.jpg',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
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
}

export default new ProjectModel();
