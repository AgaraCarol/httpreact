# HTTP React - Sistema CRUD

Aplicação web moderna desenvolvida em React para gerenciamento completo de produtos com operações CRUD (Create, Read, Update, Delete).

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JSON Server](https://img.shields.io/badge/JSON_Server-1.0.0-000000?style=for-the-badge)

##  Demo

**[Ver aplicação ao vivo](https://AgaraCarol.github.io/httpreact)**

##  Funcionalidades

-  **Listagem dinâmica** de produtos em tempo real
-  **Cadastro** de novos produtos com nome e preço
-  **Exclusão** de produtos da lista
-  **Estados de loading** durante requisições
-  **Tratamento de erros** com feedback visual
-  **Interface responsiva** e moderna
-  **Validação** de formulários
-  **Atualização automática** após operações

##  Tecnologias Utilizadas

- **React 19** com Hooks (useState, useEffect)
- **Custom Hooks** para requisições HTTP
- **JSON Server** para API REST simulada
- **CSS moderno** com gradientes e animações
- **Google Fonts** (Inter)
- **GitHub Pages** para deploy

##  Interface

- Design profissional com gradiente azul (#1e3c72 → #2a5298)
- Cards com efeitos hover e sombras suaves
- Fonte Inter para melhor legibilidade
- Animações e transições fluidas
- Design responsivo e mobile-friendly

##  Instalação
```bash
# Clone o repositório
git clone https://github.com/AgaraCarol/httpreact.git

# Entre na pasta do projeto
cd httpreact

# Instale as dependências
npm install
```

##  Como Usar

**1. Inicie o JSON Server (Backend):**
```bash
npm run server
```
O servidor estará rodando em `http://localhost:3001`

**2. Inicie a aplicação React (Frontend):**
```bash
npm start
```
A aplicação abrirá em `http://localhost:3000`

##  Arquitetura
```
src/
├── hooks/
│   └── useFetch.js       # Custom Hook para requisições HTTP
├── App.js                # Componente principal
├── App.css               # Estilos da aplicação
└── index.js              # Ponto de entrada
```

### Custom Hook - useFetch

O hook personalizado `useFetch` gerencia:
- Estados de loading
- Tratamento de erros
- Requisições GET e POST
- Atualização automática de dados


## 🌐 Deploy

O projeto está hospedado no GitHub Pages:
**https://AgaraCarol.github.io/httpreact**

##  Autora

**Ana Caroline Alves**

- GitHub: [@AgaraCarol](https://github.com/AgaraCarol)

##  Licença

Este projeto é open source e está disponível sob a licença MIT.

---

⭐ Se você gostou deste projeto, deixe uma estrela!