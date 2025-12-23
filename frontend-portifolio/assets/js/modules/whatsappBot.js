
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

    // floatBtn.classList.add('ativo'); // (Opcional: descomente se seu CSS precisar dessa classe para mostrar o botão)

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
    
   // 4. Lógica do envio
    function sendToWhatsapp(tipo) {
        // O número deve ser apenas dígitos (sem + ou -)
        const numeroTelefone = "5531989882748"; 
        let texto = "";

            // Agora as mensagens contêm a Palavra-Chave do Typebot
        if (tipo === 'recrutador') {
            // Palavra-chave: Recrutamento
            texto = "Olá Priscilla! Sou recrutador e vi seu portfólio. Gostaria de falar sobre uma oportunidade de Recrutamento.";
        } else if (tipo === 'projeto') {
            // Palavra-chave: Projeto
            texto = "Olá Priscilla! Gostaria de fazer um orçamento para um Projeto de desenvolvimento.";
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

    // 5. Vincula cada função ao botão de envio
    // Nota: Verifique se o ID 'opt-network' no HTML bate com o envio 'network' aqui
    if(btnRecrutador) btnRecrutador.addEventListener('click', () => sendToWhatsapp('recrutador'));
    if(btnProjeto) btnProjeto.addEventListener('click', () => sendToWhatsapp('projeto'));
    if(btnNetwork) btnNetwork.addEventListener('click', () => sendToWhatsapp('network'));
}