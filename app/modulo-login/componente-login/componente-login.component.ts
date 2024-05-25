/*Codigo
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponenteLoginService } from '../componente-login.service'
@Component({
  selector: 'app-componente-login',
  templateUrl: './componente-login.component.html',
  styleUrls: ['./componente-login.component.scss']
})
export class ComponenteLoginComponent {
  constructor(private snackBar: MatSnackBar, private loginService: ComponenteLoginService) {

  }
  //title = 'projeto-guilherme';

  log_usuario: string = ''
  log_password: string = ''
  reg_usuario: string = ''
  reg_password: string = ''
  reg_confirm_password: string ='';


  login = () => {
    const usuarioEncontrado = this.loginService.usuarios.find(usuario => usuario.usuario === this.log_usuario && usuario.senha === this.log_password);
    if (usuarioEncontrado) {
      this.snackBar.open('Login realizado com sucesso', 'Fechar',{
        duration: 3000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom'})
    } else {
      this.snackBar.open('Dados inválidos', 'Fechar',{
        duration: 3000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom'})
    }
  }

  register = () => {
    if (this.reg_password === this.reg_confirm_password) {
      this.snackBar.open('Cadastro realizado com sucesso', 'Fechar',{
        duration: 3000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom'})
    }
    else {
      this.snackBar.open('Senhas não conferem', 'Fechar',{
        duration: 3000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom'})
    }
  }



}*/
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
//import { ResetPasswordService } from 'src/app/reset-password-component/auth-service.service';
import { ComponenteLoginService } from '../componente-login.service';
interface Usuario {
  usuario: string;
  senha: string;
  admin: boolean;
}
//  Interface podemos dizer que sao assinaturas
//  de metodos ou da classes. No nosso exemplos precisamos
//  que quando o "usaruio/cliente" digitar os dados, precisa
//  que esses dados seguem um padrao, ou seja, que tenha um
//  usuario e uma senha. A interface é um contrato que o
//  usuario/cliente vai ter que seguir.

@Component({
  selector: 'app-componente-login',
  templateUrl: './componente-login.component.html',
  styleUrls: ['./componente-login.component.scss'],
})
export class ComponenteLoginComponent implements OnInit {
  log_usuario: string = '';
  log_password: string = '';
  reg_usuario: string = '';
  reg_password: string = '';
  reg_confirm_password: string = '';
  admin_login: string = '';
  admin_password: string = '';

  usuarios: Usuario[] = []; // variavel

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: ComponenteLoginService,
  ) {}

  /*
    Qual a diferença entre DIP e DI?
    https://youtube.com/shorts/GwW3IJSsVX0?si=fh9TQPuczrIf8Q1D
    constructor(private snackBar: MatSnackBar, private router: Router,
    private loginService: ComponenteLoginService, // private AuthService: ResetPasswordService) { }
    */
  ngOnInit(): void {
    this.usuarios = this.loginService.usuarios;
  }
  /*
  Documento e composto por estrutura de chave e valor
  Find e a ideia que ele busca a quantidade de registro que ele encontra referente(referencia) de acordo com o nosso criterio de busca
  */
  // skip ( 10)  -> pula os 10 primeiros registros // limit ( 10) -> limita a 10 registros
  login = () => {
    // login () {} -> javascript  login = () => {} -> typescript (arrow function) ES6
    const usuarioLogado = this.usuarios.find(
      (usuario: Usuario) =>
        usuario.usuario === this.log_usuario &&
        usuario.senha === this.log_password &&
        usuario.admin,
    );
    if (usuarioLogado) {
      this.snackBar.open('Login realizado com sucesso', 'Fechar', {
        duration: 7000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    } else {
      this.snackBar.open('Dados inválidos', 'Fechar', {
        duration: 7000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  };

  register = () => {
    const adminLogado = this.usuarios.find(
      (usuario: Usuario) =>
        usuario.usuario === this.admin_login &&
        usuario.senha === this.admin_password &&
        usuario.admin,
    );
    if (adminLogado) {
      if (this.reg_password === this.reg_confirm_password) {
        this.snackBar.open('Cadastro realizado com sucesso', 'Fechar', {
          duration: 3000, // Duração em milissegundos
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      } else {
        this.snackBar.open('Senhas não conferem', 'Fechar', {
          duration: 3000, // Duração em milissegundos
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
    } else {
      this.snackBar.open('Usuário não autorizado', 'Fechar', {
        duration: 3000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  };

  forgotPassword = () => {
    this.router.navigate(['/reset-password']);
  };
  onForgotPassword(): void {
    this['router'].navigate(['/reset-password']);
  }


  openDialog() {
    return "openDialog"
  }
}

/* Codigo de Amostra - Email
// login () {} -> javascript  login = () => {} -> typescript (arrow function) ES6
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private snackBar: MatSnackBar) {}
  title = 'projeto-guilherme';

  log_email: string = ''
  log_password: string = ''
  reg_email: string = ''
  reg_password: string = ''
  reg_confirm_password: string ='';


  login = () => {
    if (this.log_email == "admin" && this.log_password == "admin") {
      this.snackBar.open('Login realizado com sucesso', 'Fechar',{
        duration: 3000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom'})
    } else {
      this.snackBar.open('Dados inválidos', 'Fechar',{
        duration: 3000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom'})
    }
  }
  register = () => {

    if (this.reg_password === this.reg_confirm_password) {
      this.snackBar.open('Cadastro realizado com sucesso', 'Fechar',{
        duration: 3000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom'})
    }
    else {
      this.snackBar.open('Senhas não conferem', 'Fechar',{
        duration: 3000, // Duração em milissegundos
        horizontalPosition: 'center',
        verticalPosition: 'bottom'})
    }
  }

    forgotPassword = () => {
    this['router'].navigate(['/reset-password']);
  }


}
A variável reg_usuario é utilizada para armazenar o valor digitado pelo usuário no campo de registro
de usuário. Ela é inicializada com uma string vazia para que, caso o usuário não digite nada,
a variável já tenha um valor atribuído e não seja undefined. Essa variável é utilizada no método
register() para verificar se a senha digitada pelo usuário é igual à senha de confirmação.
Se forem iguais, é exibida uma mensagem de sucesso, caso contrário, é exibida uma mensagem de erro.

ngModel está vinculado aos campos de entrada de texto para o usuário e a senha.

Quando o usuário digita o nome de usuário e a senha nos campos de entrada de texto,
o ngModel atualiza automaticamente as propriedades log_usuario e log_password do componente
ComponenteLoginComponent. E quando o usuário clica no botão de login, o método login() é chamado e utiliza os
valores das propriedades log_usuario e log_password para verificar se o usuário e a senha são válidos.

O ngModel é utilizado para criar uma conexão bidirecional entre os campos de entrada de texto no template e as
propriedades correspondentes do componente. Isso permite que os valores dos campos de entrada de texto sejam
atualizados em tempo real e que os valores das propriedades correspondentes do componente sejam atualizados automaticamente.



No código que você compartilhou, o método `login()` é chamado quando o usuário clica no botão de login.
Esse método utiliza os valores das propriedades `log_usuario` e `log_password` do componente `ComponenteLoginComponent`
para verificar se o usuário e a senha são válidos.

O `ngModel` é utilizado para criar uma conexão bidirecional entre os campos de entrada de texto no template e
as propriedades correspondentes do componente. Isso permite que os valores dos campos de entrada de texto
sejam atualizados em tempo real e que os valores das propriedades correspondentes do componente sejam atualizados automaticamente.

Por exemplo, quando o usuário digita algo no campo de entrada de texto para o usuário, o valor é atualizado
automaticamente na propriedade `log_usuario` do componente. E quando o usuário digita algo no campo de entrada
de texto para a senha, o valor é atualizado automaticamente na propriedade `log_password` do componente.
Dessa forma, quando o usuário clica no botão de login, o método `login()` utiliza os valores atualizados
dessas propriedades para verificar se o usuário e a senha são válidos.




O módulo MatSnackBar é utilizado para exibir mensagens de notificação na tela, como por exemplo, mensagens de sucesso ou erro após
uma ação do usuário. Nesse código, ele é utilizado para exibir mensagens de sucesso ou erro após o
login ou cadastro de um usuário. Ele é importado do pacote '@angular/material/snack-bar'.

Essa parte é responsável por definir as configurações da mensagem exibida pelo MatSnackBar.

- A propriedade 'duration' define a duração em milissegundos que a mensagem ficará visível na tela. No caso desse código, a duração é de 3000 milissegundos, ou seja, 3 segundos.

- A propriedade 'horizontalPosition' define a posição horizontal da mensagem na tela. No caso desse código, a posição é centralizada.

- A propriedade 'verticalPosition' define a posição vertical da mensagem na tela. No caso desse código, a posição é na parte inferior da tela.


*/
