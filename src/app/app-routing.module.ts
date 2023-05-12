import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {path:'',loadChildren:()=>import('./modules/auth.module').then(m=>m.AuthModule)},
  {path:'layout',loadChildren:()=>import('./modules/view.module').then(m=>m.ViewModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
