

export function inicializarWhatsappBot() {
    console.log("Iniciando módulo do Whatsapp...");

    // 1. Seleciona os elementos pelo ID
    const floatBtn = document.getElementById('wa-float-btn');
    const closeBtn = document.getElementById('wa-close-btn');
    const chatWindow = document.getElementById('wa-window');

    // Botões de opção
    const btnProjeto = document.getElementById('opt-projeto');
    const btnNetwork = document.getElementById('opt-network');
    const btnRecrutador = document.getElementById('opt-recrutador');

    // Se os elementos não existirem na página, para a execução (Segurança)
    if (!floatBtn) return;

    floatBtn.classList.add('ativo');

    // 2. Função para Abrir/Fechar o Chat
    function toggleChat() {
        if (chatWindow.style.display === 'block') {
            chatWindow.style.display = 'none';
        } else {
            chatWindow.style.display = 'block';
        }
    }

    // 3. Adiciona os ouvintes de evento (Listeners)
    floatBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);
    
   // 4. Lógica do envio (Versão Anti-CORS / Simple Request)
    function sendToWhatsapp(tipo) {

        // Prepara os dados
        const dados = {
            tipo: tipo,
            data: new Date().toISOString()
        };

        // --- Lógica original do WhatsApp ---
        const numeroTelefone = "5531989882748";
        let texto = "";

        if (tipo === 'recrutador') {
            // Palavra-chave: Recrutamento
            texto = "Olá Priscilla! Sou recrutador(a) e vi seu portfólio. Gostaria de falar sobre uma oportunidade/ Recrutamento.";
        } else if (tipo === 'projeto') {
            // Palavra-chave: Projeto
            texto = "Olá Priscilla! Gostaria de fazer um orçamento para um Projeto.";
        } else {
            // Palavra-chave: Networking
            texto = "Olá Priscilla! Vim pelo seu portfólio e gostaria de fazer Networking.";
        }

        const textoCodificado = encodeURIComponent(texto);

        setTimeout(() => {
            window.open(`https://wa.me/${numeroTelefone}?text=${textoCodificado}`, '_blank');
            toggleChat(); 
        }, 300);
    }

    //5. Vincula cada função ao botão de envio
    btnRecrutador.addEventListener('click', () => sendToWhatsapp('recrutador'));
    btnProjeto.addEventListener('click', () => sendToWhatsapp('projeto'));
    btnNetwork.addEventListener('click', () => sendToWhatsapp('network'));
}