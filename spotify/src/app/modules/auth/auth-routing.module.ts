import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: "login", //localhost/3000/auth/login
    component: LoginPageComponent
  },
  {
    path: "**", //si no existe la ruta, lo redireccionamos
    redirectTo: "auth/login"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
