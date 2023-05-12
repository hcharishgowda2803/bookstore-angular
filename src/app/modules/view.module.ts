import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "../views/layout/layout.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {CartComponent} from "../cart/cart.component";
import {AppNavComponent} from "../views/app-nav/app-nav.component";
import {ViewBookComponent} from "../view-book/view-book.component";


  const routes:Routes = [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {
      path:'',component:LayoutComponent,children:[
        {
          path:'home',component:DashboardComponent
        },{
          path:'cart',component:CartComponent
        },{
           path:':id',component:ViewBookComponent
        }
      ]
    }
  ]

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    CartComponent,
    AppNavComponent,
    ViewBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ViewModule { }
