import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSigninComponent } from './components/auth-signin/auth-signin.component'
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component'
import { PrivateComponent } from './components/private/private.component'

const routes: Routes = [
  { path: 'signin', component: AuthSigninComponent },
  { path: 'signup', component: AuthSignupComponent },
  { path: 'private', component: PrivateComponent },
  { path: '**', redirectTo: '/signin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
