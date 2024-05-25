import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteLoginComponent } from './componente-login/componente-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponenteLoginService } from './componente-login.service';
import { AppRoutingModule } from '../app-routing.module'; // Importe o AppRoutingModule aqui
//import { ResetPasswordComponentModule } from '../reset-password-component/reset-password-component.module';

@NgModule({
  declarations: [ComponenteLoginComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatIconModule,
    AppRoutingModule,
    //ResetPasswordComponentModule
  ],
  exports: [ComponenteLoginComponent],
  providers: [ComponenteLoginService],
})
export class ModuloLoginModule {}
