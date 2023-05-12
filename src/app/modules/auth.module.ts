import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../views/login/login.component";
import {RegistrationComponent} from "../views/registration/registration.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'register',component:RegistrationComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AuthModule { }
