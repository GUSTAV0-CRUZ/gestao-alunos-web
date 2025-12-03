# Gestão de Alunos - Web Client (React)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

> Interface Web moderna desenvolvida em React para consumir a API REST de Gestão de Alunos. O projeto implementa autenticação JWT, gerenciamento de estado global com Redux e Saga, e upload de imagens.

## 🚀 Acesso ao Projeto

A aplicação está hospedada e rodando em um servidor na AWS.

[**🔗 Clique aqui para acessar o sistema**](http://50.19.59.67/)

⚠️ **Nota:** *Como o projeto está hospedado em um IP público via HTTP (sem domínio configurado), seu navegador pode exibir um aviso de "Não seguro". Isso é esperado neste ambiente de desenvolvimento.*

## 📄 Sobre o Projeto

Este projeto é o Frontend da aplicação completa de Gestão de Alunos. Ele consome a API RESTful (Back-end) desenvolvida para este sistema.

O objetivo foi criar uma Single Page Application (SPA) robusta, focando na arquitetura de dados e na experiência do usuário, lidando com complexidades como persistência de autenticação, interceptação de requisições e gerenciamento assíncrono de dados.

## ✨ Funcionalidades

* **Autenticação e Segurança:**
    * Login e Cadastro de usuários consumindo a API.
    * **Rotas Privadas:** O sistema redireciona usuários não logados das páginas protegidas.
    * **Persistência:** Uso de `redux-persist` para manter a sessão do usuário ativa.
* **Gestão de Alunos (CRUD):**
    * Listagem de alunos com fotos de perfil.
    * Cadastro e Edição de dados cadastrais.
    * Exclusão de registros.
* **Upload de Imagens:**
    * Envio de fotos de perfil via `FormData`, atualizando a interface em tempo real após o upload.
* **Feedback Visual:**
    * Notificações "Toast" (sucesso/erro) para todas as ações do usuário.
    * Loaders animados durante as requisições à API.

## 🛠️ Tecnologias e Arquitetura

A aplicação foi construída com uma base sólida de configurações para garantir escalabilidade:

* **React (Hooks):** Utilização de Hooks (`useState`, `useEffect`) para lógica dos componentes.
* **Redux & Redux Saga:** Arquitetura Flux para gerenciamento de estado global. O **Saga** foi utilizado para lidar com "side-effects" (chamadas assíncronas à API e regras de negócio complexas) fora dos componentes.
* **Axios:** Cliente HTTP configurado com `interceptors` para injetar automaticamente o Token JWT no header de todas as requisições autenticadas.
* **Styled Components:** Estilização CSS-in-JS, permitindo estilos escopados e dinâmicos baseados em props.
* **React Router DOM:** Gerenciamento de rotas e navegação, incluindo um componente personalizado para proteção de rotas privadas.
* **Redux Persist:** Salva o estado do Redux (como dados do usuário e token) no `localStorage` do navegador.

## 📚 Agradecimentos e Créditos

Este projeto foi desenvolvido com base nos ensinamentos do curso **"Curso de JavaScript e TypeScript do básico ao avançado JS/TS"**, ministrado pelo professor **Luiz Otávio Miranda**.

## 👨‍💻 Autor

| [<img src="https://github.com/GUSTAV0-CRUZ.png" width="100px;"/><br /><sub><b>Gustavo Cruz</b></sub>](https://github.com/GUSTAV0-CRUZ) |
| :---: |

Projeto desenvolvido por Gustavo Cruz (GUSTAV0-CRUZ).
