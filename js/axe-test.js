// Script para executar testes de acessibilidade usando axe-core
document.addEventListener('DOMContentLoaded', function() {
  // Verifica se axe está disponível
  if (typeof axe === 'undefined') {
    console.error('axe-core não está disponível. Certifique-se de incluir a biblioteca axe-core.');
    return;
  }

  // Executa a análise de acessibilidade após o carregamento completo da página
  window.addEventListener('load', function() {
    // Pequeno atraso para garantir que todos os elementos estejam renderizados
    setTimeout(() => {
      runAccessibilityTests();
    }, 1000);
  });

  function runAccessibilityTests() {
    // Configuração para executar testes WCAG 2.1 AA
    axe.run(document, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice']
      }
    }).then(results => {
      // Exibe um resumo dos resultados
      console.group('Resultados da Análise de Acessibilidade');
      console.log(`Total de violações: ${results.violations.length}`);
      console.log(`Total de testes bem-sucedidos: ${results.passes.length}`);
      console.log(`Total de verificações incompletas: ${results.incomplete.length}`);
      console.groupEnd();

      // Se houver violações, exibe detalhes
      if (results.violations.length > 0) {
        console.group('Detalhes das Violações de Acessibilidade');
        
        results.violations.forEach((violation, index) => {
          console.group(`${index + 1}. ${violation.id} - ${violation.help}`);
          console.log(`Impacto: ${violation.impact}`);
          console.log(`Descrição: ${violation.description}`);
          console.log(`Ajuda: ${violation.helpUrl}`);
          
          console.group('Elementos afetados:');
          violation.nodes.forEach(node => {
            console.log('HTML:', node.html);
            console.log('Seletor:', node.target.join(', '));
            console.log('Correção sugerida:', node.failureSummary);
            
            // Destaca visualmente os elementos com problemas
            highlightElement(node.target);
          });
          console.groupEnd();
          
          console.groupEnd();
        });
        
        console.groupEnd();
        
        // Mostra uma notificação na página
        showAccessibilityNotification(results.violations.length);
      } else {
        console.log('%cParabéns! Nenhuma violação de acessibilidade encontrada.', 'color: green; font-weight: bold;');
      }
    }).catch(err => {
      console.error('Erro ao executar testes de acessibilidade:', err);
    });
  }

  // Função para destacar elementos com problemas de acessibilidade
  function highlightElement(targets) {
    targets.forEach(target => {
      try {
        const elements = document.querySelectorAll(target);
        elements.forEach(el => {
          // Salva o estilo original
          el.dataset.originalOutline = el.style.outline;
          el.dataset.originalOutlineOffset = el.style.outlineOffset;
          
          // Aplica destaque visual
          el.style.outline = '3px solid #e74c3c';
          el.style.outlineOffset = '2px';
          
          // Adiciona tooltip com informações
          el.title = 'Problema de acessibilidade detectado. Verifique o console para detalhes.';
          
          // Remove o destaque após 5 segundos
          setTimeout(() => {
            el.style.outline = el.dataset.originalOutline || '';
            el.style.outlineOffset = el.dataset.originalOutlineOffset || '';
          }, 5000);
        });
      } catch (e) {
        console.error('Erro ao destacar elemento:', e);
      }
    });
  }

  // Função para mostrar notificação na página
  function showAccessibilityNotification(violationCount) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #e74c3c;
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      z-index: 9999;
      font-family: Arial, sans-serif;
      max-width: 300px;
    `;
    
    notification.innerHTML = `
      <p style="margin: 0; font-weight: bold;">Problemas de Acessibilidade Detectados</p>
      <p style="margin: 5px 0 0;">Foram encontradas ${violationCount} violações de acessibilidade. Verifique o console para detalhes.</p>
      <button style="background: white; color: #e74c3c; border: none; padding: 5px 10px; margin-top: 10px; border-radius: 3px; cursor: pointer;">Fechar</button>
    `;
    
    document.body.appendChild(notification);
    
    // Adiciona evento para fechar a notificação
    const closeButton = notification.querySelector('button');
    closeButton.addEventListener('click', () => {
      document.body.removeChild(notification);
    });
    
    // Remove a notificação após 10 segundos
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 10000);
  }
});
