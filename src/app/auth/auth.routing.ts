import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"; /// lo necesito exportar para que cualquieir otro modulo pueda hacer uso de el 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    { path: 'login', component:LoginComponent }, // no tienen la estructura del Pages 
    { path: 'register' , component:RegisterComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AuthRoutingModule { }
