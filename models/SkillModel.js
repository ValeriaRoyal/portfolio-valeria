/**
 * Modelo para gerenciar os dados das habilidades
 */
class SkillModel {
  constructor() {
    this.skills = [
      {
        id: 1,
        name: 'HTML5',
        icon: 'fa-brands fa-html5',
        level: 90
      },
      {
        id: 2,
        name: 'CSS3',
        icon: 'fa-brands fa-css3-alt',
        level: 90
      },
      {
        id: 3,
        name: 'JavaScript',
        icon: 'fa-brands fa-js',
        level: 80
      },    
      {
        id: 4,
        name: 'React',
        icon: 'fa-brands fa-react',
        level: 40
      },
      {
        id: 5,
        name: 'Angular',
        icon: 'fa-brands fa-angular',
        level: 75
      },
      {
        id: 6,
        name: 'Vue.js',
        icon: 'fa-brands fa-vuejs',
        level: 75
      },
      {
        id: 7,
        name: 'Node.js',
        icon: 'fa-brands fa-node-js',
        level: 65
      },
      {
        id: 8,
        name: 'UX Design',
        icon: 'fa-solid fa-pencil-ruler',
        level: 75
      },
      {
        id: 9,
        name: 'Testes (QA)',
        icon: 'fa-solid fa-vial-circle-check',
        level: 40
      },
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
