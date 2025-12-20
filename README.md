# 🌐 Portfólio - Priscilla Barbosa

Bem-vindo(a) ao meu portfólio! 🚀

Este projeto é uma **landing page** de alta performance criada para apresentar meus trabalhos, habilidades e informações de contato. Trata-se de uma aplicação Fullstack composta por uma interface moderna e otimizada e uma **API Backend** para gerenciamento de dados.

O projeto passou recentemente por uma refatoração para **Vite + SASS**, garantindo carregamento rápido e código modular.

---

## 📸 Demonstração e Links

👉 **Acesse online:** [https://priscillabarbosa.com.br](https://priscillabarbosa-desenvolvimento-au.vercel.app)

![Demo da página](./docs/demo1.gif)

| Componente | Link |
| :--- | :--- |
| **Frontend (Deploy)** | [Vercel App](https://priscillabarbosa-desenvolvimento-au.vercel.app) |
| **Repositório Frontend** | [GitHub - Frontend](https://github.com/PriscillaBarbosa/priscillabarbosa-desenvolvimento-automacao) |
| **Repositório Backend** | [GitHub - Backend](https://github.com/PriscillaBarbosa/backend-portifoliocomercial) |

---

## 🛠 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando uma arquitetura moderna e desacoplada, focada em performance (Core Web Vitals):

### 🎨 Frontend (Interface)
* **Vite:** Build tool de última geração para desenvolvimento rápido e otimizado.
* **SASS (SCSS):** Pré-processador CSS para estilos modulares e organizados.
* **Bootstrap 5:** Customizado via SASS (importando apenas o necessário para leveza).
* **JavaScript (ES6+):** Uso de Módulos (ESM) e interatividade.
* **HTML5 Semântico:** Estrutura acessível e otimizada para SEO.

### ⚙️ Backend (API)
* **Node.js:** Ambiente de execução JavaScript no servidor.
* **Express.js:** Framework para criação de rotas e middleware.
* **Arquitetura MVC:** Organização em *Models*, *Controllers* e *Services*.

---

## ✨ Funcionalidades

✅ **Alta Performance:** Imagens otimizadas e scripts minificados via Vite.

✅ **Design Responsivo:** Adaptável fluidamente para mobile, tablet e desktop.

✅ **Modo Dark/Light:** (Se aplicável, ou "Estilização Customizada").

✅ **Integração com API:** Comunicação assíncrona entre interface e servidor.

---

## 📂 Estrutura do Projeto

O projeto segue uma estrutura de **Monorepo** simples, separando responsabilidades:

```bash
priscillabarbosa-desenvolvimento/
│
├── backend-portfolio/       # ⚙️ SERVIDOR (API Node.js)
│   ├── .env                 # Variáveis de ambiente (Porta, DB, etc)
│   ├── server.js            # Ponto de entrada da API
│   └── package.json         # Dependências do backend
│
├── frontend-portfolio/      # 🎨 APLICAÇÃO WEB (Vite + Bootstrap)
│   ├── assets/              # Recursos do projeto
│   │   ├── css/             # Estilos (SCSS/CSS)
│   │   ├── fonts/           # Tipografias personalizadas
│   │   ├── img/             # Imagens e ícones
│   │   └── js/              # Lógica do cliente
│   │       ├── modules/     # Módulos JavaScript (Dark Mode, Forms)
│   │       └── scripts.js   # Script principal (Importa SCSS e módulos)
│   │
│   ├── dist/                # 🚀 Versão de Produção (Gerada pelo build)
│   ├── index.html           # Arquivo principal (Ponto de entrada do Vite)
│   ├── vite.config.js       # Configuração do Vite (se houver)
│   └── package.json         # Dependências do frontend
│
└── README.md                # Documentação do projeto