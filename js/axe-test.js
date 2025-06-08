// Script para executar testes de acessibilidade usando Axe
document.addEventListener('DOMContentLoaded', function() {
  // Verifica se axe está disponível
  if (typeof axe === 'undefined') {
    console.error('Axe não está disponível. Certifique-se de incluir a biblioteca axe-core.');
    return;
  }

  // Executa a análise de acessibilidade
  axe.run(document, {
    runOnly: {
      type: 'tag',
      values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice']
    }
  }).then(results => {
    console.log('Resultados da análise de acessibilidade:');
    
    // Exibe o número total de violações
    console.log(`Total de violações: ${results.violations.length}`);
    
    // Exibe detalhes de cada violação
    if (results.violations.length > 0) {
      console.group('Violações encontradas:');
      results.violations.forEach((violation, index) => {
        console.group(`${index + 1}. ${violation.id} - ${violation.help}`);
        console.log(`Impacto: ${violation.impact}`);
        console.log(`Descrição: ${violation.description}`);
        console.log(`Ajuda: ${violation.helpUrl}`);
        
        console.group('Elementos afetados:');
        violation.nodes.forEach(node => {
          console.log(node.html);
          console.log('Elemento:', node.target);
          console.log('Correção sugerida:', node.failureSummary);
        });
        console.groupEnd();
        
        console.groupEnd();
      });
      console.groupEnd();
    } else {
      console.log('Nenhuma violação de acessibilidade encontrada!');
    }
    
    // Exibe passes (testes bem-sucedidos)
    console.log(`Total de testes bem-sucedidos: ${results.passes.length}`);
    
    // Exibe avisos
    if (results.incomplete.length > 0) {
      console.log(`Total de avisos/verificações manuais necessárias: ${results.incomplete.length}`);
    }
    
    // Cria um relatório visual na página
    createAccessibilityReport(results);
  }).catch(err => {
    console.error('Erro ao executar a análise de acessibilidade:', err);
  });
});

// Função para criar um relatório visual na página
function createAccessibilityReport(results) {
  // Cria um container para o relatório
  const reportContainer = document.createElement('div');
  reportContainer.id = 'axe-report';
  reportContainer.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    max-width: 400px;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    z-index: 9999;
    font-family: Arial, sans-serif;
  `;
  
  // Adiciona um botão para fechar o relatório
  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.style.cssText = `
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #333;
  `;
  closeButton.addEventListener('click', () => {
    document.body.removeChild(reportContainer);
  });
  reportContainer.appendChild(closeButton);
  
  // Adiciona título
  const title = document.createElement('h2');
  title.textContent = 'Relatório de Acessibilidade';
  title.style.cssText = 'margin-top: 0; color: #333;';
  reportContainer.appendChild(title);
  
  // Resumo
  const summary = document.createElement('div');
  summary.innerHTML = `
    <p><strong>Violações:</strong> <span style="color: ${results.violations.length > 0 ? 'red' : 'green'}">${results.violations.length}</span></p>
    <p><strong>Testes bem-sucedidos:</strong> ${results.passes.length}</p>
    <p><strong>Verificações manuais necessárias:</strong> ${results.incomplete.length}</p>
  `;
  reportContainer.appendChild(summary);
  
  // Lista de violações
  if (results.violations.length > 0) {
    const violationsTitle = document.createElement('h3');
    violationsTitle.textContent = 'Violações encontradas:';
    violationsTitle.style.cssText = 'margin-bottom: 10px; color: #333;';
    reportContainer.appendChild(violationsTitle);
    
    const violationsList = document.createElement('ul');
    violationsList.style.cssText = 'padding-left: 20px; margin-top: 0;';
    
    results.violations.forEach(violation => {
      const item = document.createElement('li');
      item.innerHTML = `
        <strong>${violation.id}</strong>: ${violation.help}
        <br><span style="color: ${getImpactColor(violation.impact)}">Impacto: ${violation.impact}</span>
        <br><small>${violation.nodes.length} elemento(s) afetado(s)</small>
      `;
      violationsList.appendChild(item);
    });
    
    reportContainer.appendChild(violationsList);
  } else {
    const noViolations = document.createElement('p');
    noViolations.textContent = 'Nenhuma violação de acessibilidade encontrada!';
    noViolations.style.color = 'green';
    reportContainer.appendChild(noViolations);
  }
  
  // Adiciona o relatório à página
  document.body.appendChild(reportContainer);
}

// Função auxiliar para determinar a cor com base no impacto
function getImpactColor(impact) {
  switch (impact) {
    case 'critical':
      return '#d63031';
    case 'serious':
      return '#e17055';
    case 'moderate':
      return '#fdcb6e';
    case 'minor':
      return '#74b9ff';
    default:
      return '#636e72';
  }
}
