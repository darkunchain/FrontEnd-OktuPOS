import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthSigninComponent } from './components/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { PrivateComponent } from './components/private/private.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AuthSigninComponent,
    AuthSignupComponent,
    PrivateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
