import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuloLoginModule } from './modulo-login/modulo-login.module';
import { MatIconModule } from '@angular/material/icon';
import { ResetPasswordComponentModule } from './reset-password-component/reset-password-component.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModuloLoginModule,
    MatIconModule,
    ResetPasswordComponentModule,
  ],
})
export class AppModule {}
