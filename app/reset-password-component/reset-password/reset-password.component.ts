import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResetPasswordService } from '../auth-service.service';

interface Usuario {
  usuario: string;
  senha: string;
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  usuario: string = '';
  oldPassword: string = '';
  newPassword: string = '';

  constructor(
    private resetPasswordService: ResetPasswordService,
    private snackBar: MatSnackBar,
  ) {}

  resetPassword = () => {
    // Verifica se o usuário está na lista de usuários
    const usuario = JSON.parse(
      localStorage.getItem(this.usuario) || '{}',
    ) as Usuario;
    if (!usuario.usuario) {
      this.snackBar.open('Usuário não encontrado', 'Fechar', {
        duration: 3000,
      });
      return;
    }

    // Verifica se a senha antiga fornecida corresponde à senha atual do usuário
    if (usuario.senha !== this.oldPassword) {
      this.snackBar.open('Senha antiga incorreta', 'Fechar', {
        duration: 3000,
      });
      return;
    }

    // Redefine a senha do usuário
    this.resetPasswordService.resetPassword(
      this.usuario,
      this.oldPassword,
      this.newPassword,
    );

    // Atualiza a lista de usuários no armazenamento local
    localStorage.setItem(
      this.usuario,
      JSON.stringify({ usuario: this.usuario, senha: this.newPassword }),
    );

    // Exibe uma mensagem de sucesso
    this.snackBar.open('Senha redefinida com sucesso', 'Fechar', {
      duration: 3000,
    });

    // Limpa os campos de senha antiga e nova senha
    this.oldPassword = '';
    this.newPassword = '';
  };
}
