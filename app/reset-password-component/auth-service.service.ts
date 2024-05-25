import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario {
  usuario: string;
  senha: string;
  admin: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  usuarios: Usuario[] = [
    { usuario: 'admin', senha: 'admin', admin: true },
    { usuario: 'guilherme', senha: '10', admin: true },
    { usuario: 'marcelo', senha: '20', admin: true },
    { usuario: 'thiago', senha: '30', admin: true },
  ];

  constructor(private router: Router) {}

  resetPassword = (
    usuario: string,
    oldPassword: string,
    newPassword: string,
  ) => {
    // Verifica se o usuário está na lista de usuários
    const usuarioEncontrado = this.usuarios.find((u) => u.usuario === usuario);
    if (!usuarioEncontrado) {
      alert('Usuário não encontrado');
      return;
    }

    // Verifica se a senha antiga fornecida corresponde à senha atual do usuário
    if (usuarioEncontrado.senha !== oldPassword) {
      alert('Senha antiga incorreta');
      return;
    }

    // Redefine a senha do usuário
    usuarioEncontrado.senha = newPassword;
    alert('Senha atualizada com sucesso!');
  };
}
