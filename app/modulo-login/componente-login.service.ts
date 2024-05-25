/*Codigo

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponenteLoginService {
  adicionarUsuario(novoUsuario: { usuario: string; senha: string; admin: boolean; }, usuarioLogado: { usuario: string; senha: string; }) {
    throw new Error('Method not implemented.');
  }

  usuarios = [
    { usuario: 'admin', senha: 'admin' },
    { usuario: 'guilherme', senha: '10' },
    { usuario: 'marcelo', senha: '20' },
    { usuario: 'thiago', senha: '30' }
  ];
  usuariosAutorizados: any;

  constructor() { }
}

*/
/*
https://youtube.com/shorts/GwW3IJSsVX0?si=fh9TQPuczrIf8Q1D

Qual a diferença entre DIP e DI?

*/

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario {
  usuario: string;
  senha: string;
  admin: boolean;
} //  Interface podemos dizer que sao assinaturas
//  de metodos ou da classes. No nosso exemplos precisamos
//  que quando o "usaruio/cliente" digitar os dados, precisa
//  que esses dados seguem um padrao, ou seja, que tenha um
//  usuario e uma senha. A interface é um contrato que o
//  usuario/cliente vai ter que seguir.

@Injectable({
  providedIn: 'root',
})
export class ComponenteLoginService {
  usuarios: Usuario[] = [
    { usuario: 'admin', senha: 'admin', admin: true },
    { usuario: 'guilherme', senha: '10', admin: true },
    { usuario: 'marcelo', senha: '20', admin: true },
    { usuario: 'thiago', senha: '30', admin: true },
  ];

  constructor(private router: Router) {}

  /*
  login = (usuario: string, senha: string) => {
    const usuarioEncontrado = this.usuarios.find(u => u.usuario === usuario && u.senha === senha);
    if (usuarioEncontrado) {
      localStorage.setItem('usuario', JSON.stringify(usuarioEncontrado));
      // this.router.navigate(['/dashboard']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }*/
  /*
  logout = () => {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }*/
  /*
  resetUserPassword = (usuario: string, oldPassword: string, newPassword: string) => {
    const usuarioEncontrado = this.usuarios.find(u => u.usuario === usuario && u.senha === oldPassword);
    if (usuarioEncontrado) {
      usuarioEncontrado.senha = newPassword;
      alert('Senha atualizada com sucesso!');
    } else {
      alert('Usuário ou senha inválidos');
    }
  }*/
}

/*

  usuarios: Usuario[]  = [
    { usuario: 'admin', senha: 'admin', admin: true },
    { usuario: 'guilherme', senha: '10', admin: true },
    { usuario: 'marcelo', senha: '20', admin: true },
    { usuario: 'thiago', senha: '30', admin: true}
  ];


  { usuario: 'admin', senha: 'admin', admin: true },
  { usuario: 'guilherme', senha: '10', admin: false },
  { usuario: 'marcelo', senha: '20', admin: false },
  { usuario: 'thiago', senha: '30', admin: false }


  usuariosAutorizados: string[] = ['admin', 'guilherme', 'marcelo', 'thiago']; // lista de usuários autorizados

  constructor() { }

  adicionarUsuario(usuario: Usuario, currentUser: Usuario) {
    if (this.usuariosAutorizados.includes(currentUser.usuario)) { // verifica se o usuário atual está na lista de usuários autorizados
      this.usuarios.push(usuario);
    }
  }*/

/*

 é possível ajustar a lógica para permitir a redefinição de senha de um usuário específico. Você pode adicionar um novo método resetUserPassword ao serviço LoginService que recebe o nome de usuário, a senha antiga e a nova senha como parâmetros. Em seguida, você pode percorrer a lista de usuários e encontrar o usuário com o nome de usuário fornecido. Se o usuário for encontrado e a senha antiga fornecida corresponder à senha atual do usuário, a senha do usuário será atualizada para a nova senha fornecida.

O código do serviço LoginService pode ficar assim:



*/
