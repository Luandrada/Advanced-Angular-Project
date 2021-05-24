import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"; /// lo necesito exportar para que cualquieir otro modulo pueda hacer uso de el 
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';


const routes: Routes = [
  { path: 'dashboard' , component: PagesComponent, 
    children:[ // las que quiero que tengan la  estructura del pages (header footer sidebar )
      { path:'', component: DashboardComponent },
      { path: 'progress' , component: ProgressComponent},
      { path: 'grafica1' , component: Grafica1Component}, 
      { path: '' , redirectTo: '/dashboard', pathMatch:'full'},

    ]
  },
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
export class PagesRoutingModule { }
