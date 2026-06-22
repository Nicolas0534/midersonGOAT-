function mostrarVantagem(tipo) {
    // Seleciona a div onde o resultado será exibido
    const resultadoDiv = document.getElementById('resultado');
    
    if (tipo === 'campo') {
        resultadoDiv.innerHTML = "<strong>Vantagem do Campo:</strong> Você terá uma vida com menos estresse, menos poluição sonora e visual, além de consumir alimentos mais frescos e ter uma forte ligação com a comunidade local.";
        resultadoDiv.style.backgroundColor = "#e8f5e9"; // Fundo verde claro
        resultadoDiv.style.color = "#2e7d32"; // Texto verde escuro
    } else if (tipo === 'cidade') {
        resultadoDiv.innerHTML = "<strong>Vantagem da Cidade:</strong> Você terá acesso rápido a tecnologias de ponta, internet de alta velocidade, transporte facilitado, além de shoppings, cinemas e hospitais especializados a poucos minutos de distância.";
        resultadoDiv.style.backgroundColor = "#e3f2fd"; // Fundo azul claro
        resultadoDiv.style.color = "#1565c0"; // Texto azul escuro
    }
}