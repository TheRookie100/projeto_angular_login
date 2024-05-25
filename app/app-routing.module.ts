import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteLoginComponent } from './modulo-login/componente-login/componente-login.component';
import { ResetPasswordComponent } from './reset-password-component/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: ComponenteLoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
