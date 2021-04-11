import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { DesignComponent } from './Design/Design.component';
//import { listgroupComponent } from './listgroup/listgroup.component';
import { navbarComponent } from './navbar/navbar.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
     //DesignComponent,
     //listgroupComponent,
     navbarComponent

  ],
  exports: [
    //DesignComponent,
    //listgroupComponent,
    navbarComponent
  ]
})
export class AyshaModule { }