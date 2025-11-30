//const N8N_WEBHOOK_URL = "https://n8n-portfolio-xis4.onrender.com/webhook/lead-portfolio";

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
    
   // 4. Lógica do envio (Versão Anti-CORS / Simple Request)
    function sendToWhatsapp(tipo) {

        // Prepara os dados
        const dados = {
            tipo: tipo,
            data: new Date().toISOString()
        };

        // ENVIAR COMO TEXTO PURO (Isso pula a verificação de CORS do navegador)
       /* fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            // O segredo está aqui: dizemos que é texto, mas mandamos o JSON convertido em string
            headers: { "Content-Type": "text/plain;charset=utf-8" }, 
            body: JSON.stringify(dados)
        }).then(() => {
            console.log("Enviado para n8n com sucesso (modo texto)");
        }).catch(err => {
            // Mesmo com erro, não travamos o usuário
            console.warn("Aviso n8n:", err);
        }); */

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