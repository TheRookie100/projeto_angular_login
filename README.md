Projeto de Tela de Login com Angular e Angular Material
Este projeto é uma aplicação simples de autenticação de usuário que utiliza Angular como framework para a lógica de front-end e Angular Material para a interface do usuário. O objetivo principal é criar uma tela de login eficiente e visualmente agradável.
Descrição
A aplicação consiste em uma única tela de login que solicita ao usuário suas credenciais, que são geralmente um nome de usuário (ou endereço de e-mail) e uma senha. A tela de login é construída usando componentes do Angular Material, que fornecem uma interface de usuário moderna e responsiva.
Os componentes do Angular Material usados incluem:
•	MatCard: Um container de conteúdo com uma sombra e arredondamento de borda para destacar a área de login.
•	MatFormField e MatInput: Para criar campos de entrada de texto para o nome de usuário e senha.
•	MatButton: Para criar o botão de login.
A lógica de autenticação (validação das credenciais do usuário e redirecionamento para a página inicial ou exibição de uma mensagem de erro) é implementada usando serviços e roteamento do Angular.
Estrutura do Projeto
O projeto é organizado da seguinte forma:
•	src/app: Este diretório contém todos os componentes, serviços e módulos do Angular.
•	login: Este diretório contém o componente de login e o serviço de autenticação.
•	login.component.ts: Este arquivo define a lógica para a tela de login.
•	login.component.html: Este arquivo define a estrutura HTML da tela de login.
•	login.component.css: Este arquivo define os estilos CSS para a tela de login.
•	auth.service.ts: Este arquivo define o serviço de autenticação que é usado para validar as credenciais do usuário.
Como Executar o Projeto
Para executar este projeto, você precisa ter o Node.js e o Angular CLI instalados em seu ambiente. Depois de clonar o repositório, você pode instalar as dependências com npm install e iniciar o servidor de desenvolvimento com ng serve. A aplicação estará disponível em http://localhost:4200/.
