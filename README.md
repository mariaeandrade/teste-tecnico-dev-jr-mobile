# Perfil Dev Jr — Maria Eduarda de Andrade

## 📝 Descrição
Este aplicativo foi desenvolvido em **React Native com Expo** como parte do Teste Técnico para a vaga de Desenvolvedor Mobile Júnior na DevStart Mobile. O projeto consiste em um portfólio profissional mobile, focado em organização, usabilidade e design moderno.

---

## 🚀 Tecnologias Utilizadas
- **React Native** (Core)
- **Expo** (Framework e SDK)
- **React Navigation** (Bottom Tabs para navegação)
- **Ionicons** (Conjunto de ícones vetoriais)
- **JavaScript** (Lógica e Estados)

---

## ✨ Funcionalidades Implementadas

### 1. Navegação por Abas (Bottom Tabs)
Utilizei a biblioteca `@react-navigation/bottom-tabs` para criar uma navegação fluida entre três telas principais, com ícones personalizados e uma estilização padronizada com cores escuras e azul de destaque.

### 2. Tela de Perfil
- Exibição de foto de perfil com bordas arredondadas.
- Dados profissionais (Nome, Cargo e Biografia).
- Layout baseado em cartões para destacar as informações sobre o fundo escuro.

### 3. Tela de Habilidades (Diferencial Dinâmico)
- **Lista Interativa**: Em vez de uma lista estática, implementei uma funcionalidade onde o usuário pode adicionar e remover habilidades.
- **Hooks (useState)**: Gerenciamento em tempo real das habilidades inseridas.
- **FlatList**: Utilizado para renderizar a lista de forma performática.
- **Feedback**: Caso a lista esteja vazia, uma mensagem padrão de categorias é exibida.

### 4. Tela de Projetos e Contato
- **Cards de Projetos**: Exibição detalhada de projetos com status coloridos (ex: "Concluído" em verde).
- **Formulário de Contato**: Área para envio de mensagens com validação. Caso o usuário tente enviar sem preencher, o app utiliza `Alert` para notificar.
- **Links Profissionais**: Seção dedicada com ícones para E-mail, GitHub e LinkedIn.

---

## 🏗️ Organização do Código
O código foi dividido de forma modular para facilitar a manutenção:
- `App.js`: Configuração global da navegação e estilos da TabBar.
- `/screens`: Pasta contendo cada tela em arquivos separados (`Perfil`, `Habilidades`, `Projetos`).
- `/assets`: Repositório de imagens utilizadas no projeto.

---

## 🛠️ Como executar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/mariaeandrade/teste-tecnico-dev-jr-mobile.git](https://github.com/mariaeandrade/teste-tecnico-dev-jr-mobile.git)
