import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthSigninComponent } from './components/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { PrivateComponent } from './components/private/private.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { PrintPosComponent } from './components/print-pos/print-pos.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthSigninComponent,
    AuthSignupComponent,
    PrivateComponent,
    HeaderComponent,
    PrintPosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
