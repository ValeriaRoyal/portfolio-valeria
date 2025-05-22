/**
 * Modelo para gerenciar os dados de contato e mensagens
 */
class ContactModel {
  constructor() {
    this.contactInfo = {
      email: 'valeriaroyal.contao@gmail.com',
      linkedin: 'https://linkedin.com/in/valeriaroyal',
      github: 'https://github.com/ValeriaRoyal',
      behance: 'https://www.behance.net/valeriaroyal',
      file: '',
    };
    
    this.messages = [];
  }

  /**
   * Retorna as informações de contato
   * @returns {Object} Informações de contato
   */
  getContactInfo() {
    return this.contactInfo;
  }

  /**
   * Salva uma nova mensagem
   * @param {Object} message - Mensagem a ser salva
   * @returns {boolean} Sucesso da operação
   */
  saveMessage(message) {
    // Validação básica
    if (!message.nome || !message.email || !message.mensagem) {
      return false;
    }
    
    // Em um cenário real, aqui enviaríamos para um backend
    // Por enquanto, apenas armazenamos localmente
    const newMessage = {
      id: Date.now(),
      timestamp: new Date(),
      ...message
    };
    
    this.messages.push(newMessage);
    return true;
  }

  /**
   * Retorna todas as mensagens (simulação)
   * @returns {Array} Lista de mensagens
   */
  getAllMessages() {
    return this.messages;
  }
}

export default new ContactModel();
