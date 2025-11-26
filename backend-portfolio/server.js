require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer'); // Voltamos a usar o Nodemailer
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// --- Configuração do Transporte BREVO (SMTP) ---
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com', // Servidor do Brevo
    port: 587,                     // Porta padrão segura
    secure: false,                 // false para porta 587
    auth: {
        user: process.env.EMAIL_USER, // Seu email de login no Brevo
        pass: process.env.EMAIL_PASS  // Sua chave SMTP (Master Password)
    }
});

app.post('/api/send-email', async (req, res) => {
    const { name, email, company, companyType, message } = req.body;

    const mailOptions = {
        // IMPORTANTE: O 'from' deve ser o mesmo email que você cadastrou/validou no Brevo
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_DESTINO,
        subject: `Novo contato do Site: ${name}`,
        html: `
            <h3>Novo Lead do Portfólio</h3>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail do Cliente:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
            <p><strong>Tipo:</strong> ${companyType || 'Não informado'}</p>
            <br/>
            <p><strong>Mensagem:</strong></p>
            <p>${message}</p>
        `,
        replyTo: email // Para quando você clicar em "Responder", ir para o cliente
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('E-mail enviado via Brevo!');
        res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ message: 'Erro ao enviar e-mail.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});