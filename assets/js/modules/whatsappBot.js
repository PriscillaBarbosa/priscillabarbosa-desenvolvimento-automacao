const N8N_WEBHOOK_URL = "https://n8n-portfolio.onrender.com/webhook/lead-portfolio";

export function inicializarWhatsappBot() {
    console.log("Iniciando módulo do Whatsapp...");

    // 1. Seleciona os elementos pelo ID
    const floatBtn = document.getElementById('wa-float-btn');
    const closeBtn = document.getElementById('wa-close-btn');
    const chatWindow = document.getElementById('wa-window');

    // Botões de opção
    const btnRecrutador = document.getElementById('opt-recrutador');
    const btnProjeto = document.getElementById('opt-projeto');
    const btnNetwork = document.getElementById('opt-network');

    // Se os elementos não existirem na página, para a execução (Segurança)
    if (!floatBtn) return;

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
    
    //4. Lógica do envio de mensagem
    function sendToWhatsapp(tipo) {

        // --- Envia para o n8n ---
        const dados = {
            tipo: tipo,
            data: new Date().toISOString() // Data e hora atual
        };

        // Dispara o dado para o n8n (sem travar o site)
        fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        }).catch(err => console.error("Erro ao enviar para n8n:", err));


        // --- Lógica original do WhatsApp ---
        const numeroTelefone = "5531988873506";
        let texto = "";

        if (tipo === 'recrutador') {
            texto = "Olá Priscilla! Sou recrutador e vi seu portfólio. Gostaria de falar sobre uma vaga.";
        } else if (tipo === 'projeto') {
            texto = "Olá Priscilla! Gostaria de fazer um orçamento para um projeto de desenvolvimento.";
        } else {
           texto = "Olá Priscilla! Vim pelo seu portfólio e gostaria de fazer networking.";
        }

        // Pequeno delay (300ms) para garantir que o navegador enviou o fetch antes de abrir a nova aba
        setTimeout(() => {
            window.open(`https://wa.me/${numeroTelefone}?text=${textoCodificado}`, '_blank');
            toggleChat(); // Fecha o chat
        }, 300);
    }

    //5. Vincula cada função ao botão de envio
    btnRecrutador.addEventListener('click', () => sendToWhatsapp('recrutador'));
    btnProjeto.addEventListener('click', () => sendToWhatsapp('projeto'));
    btnNetwork.addEventListener('click', () => sendToWhatsapp('network'));

}