require('dotenv').config(); // Carrega as variáveis de ambiente
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// --- Middlewares (Configurações iniciais) ---

// Permite que o servidor entenda JSON
app.use(express.json());

// Permite requisições de qualquer origem
app.use(cors());

// --- Configuração do Transporte de E-mail (Nodemailer) ---
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// --- Rota da API ---
app.post('/api/send-email', async (req, res) => {
    // 1. Pega os dados que vieram do frontend
    const { name, email, company, companyType, message } = req.body;
    // 2. Monta o corpo do e-mail 
    const mailOptions = {
        from: process.env.EMAIL_USER, // Quem envia 
        to: process.env.EMAIL_DESTINO, // Quem recebe 
        subject: `Novo contato do Site: ${name}`, // Assunto do e-mail
        // Corpo do e-mail em HTML 
        html: `
            <h3>Novo Lead do Site Desenvolvimento e Automação</h3>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
            <p><strong>Tipo de Empresa:</strong> ${companyType || 'Não informado'}</p>
            <br/>
            <p><strong>Mensagem:</strong></p>
            <p>${message}</p>
        `
    };

    // 3. Tentamos enviar o e-mail
    try {
        await transporter.sendMail(mailOptions);
        console.log('E-mail enviado com sucesso!');
        res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ message: 'Erro ao enviar e-mail, tente novamente mais tarde.' });
    }
});

// --- Iniciar o Servidor ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});