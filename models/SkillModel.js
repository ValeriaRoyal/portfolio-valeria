/**
 * Modelo para gerenciar os dados das habilidades
 */
class SkillModel {
  constructor() {
    this.skills = [
      {
        id: 1,
        name: 'HTML5',
        icon: 'fab fa-html5',
        level: 90
      },
      {
        id: 2,
        name: 'CSS3',
        icon: 'fab fa-css3-alt',
        level: 85
      },
      {
        id: 3,
        name: 'JavaScript',
        icon: 'fab fa-js',
        level: 80
      },
      {
        id: 4,
        name: 'React',
        icon: 'fab fa-react',
        level: 75
      },
      {
        id: 5,
        name: 'Node.js',
        icon: 'fab fa-node-js',
        level: 70
      },
      {
        id: 6,
        name: 'SQL',
        icon: 'fas fa-database',
        level: 65
      }
    ];
  }

  /**
   * Retorna todas as habilidades
   * @returns {Array} Lista de habilidades
   */
  getAllSkills() {
    return this.skills;
  }

  /**
   * Retorna habilidades por categoria
   * @param {string} category - Categoria para filtrar
   * @returns {Array} Lista de habilidades filtradas
   */
  getSkillsByCategory(category) {
    // Implementação futura para categorias de habilidades
    return this.skills;
  }
}

export default new SkillModel();
