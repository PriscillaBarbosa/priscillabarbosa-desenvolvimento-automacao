require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Essa configuração evita o Timeout do Render
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 2525,              
    secure: false,          // Para porta 2525, secure DEVE ser false
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false // Ajuda a passar por firewalls de nuvem
    },
    connectionTimeout: 10000 // Timeout de 10 segundos
});

// Teste de conexão ao iniciar o servidor
transporter.verify(function (error, success) {
    if (error) {
        console.log('❌ Erro na conexão SMTP (Brevo):', error);
    } else {
        console.log('✅ Servidor pronto para enviar e-mails via Brevo!');
    }
});

app.post('/api/send-email', async (req, res) => {
    const { name, email, company, companyType, message } = req.body;

    console.log("📩 Tentando enviar e-mail para:", process.env.EMAIL_DESTINO);

    const mailOptions = {
        from: process.env.EMAIL_USER, // O remetente deve ser o mesmo do login
        to: process.env.EMAIL_DESTINO,
        subject: `Novo contato do Site: ${name}`,
        html: `
            <h3>Novo Lead do Portfólio</h3>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
            <p><strong>Tipo:</strong> ${companyType || 'Não informado'}</p>
            <hr/>
            <p><strong>Mensagem:</strong><br/>${message}</p>
        `,
        replyTo: email
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('✅ E-mail enviado com sucesso!');
        res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('❌ Erro ao enviar:', error);
        res.status(500).json({ 
            message: 'Erro ao enviar e-mail.',
            details: error.message 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});