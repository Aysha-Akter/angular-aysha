import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { DesignComponent } from './Design/Design.component';
import { listgroupComponent } from './listgroup/listgroup.component';
//import { navbarComponent } from './navbar/navbar.component';
//import { badgeComponent } from './badge/badge.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
     //DesignComponent,
     listgroupComponent,
     //navbarComponent,
     //badgeComponent
  ],
  exports: [
    //DesignComponent,
    listgroupComponent,
    //navbarComponent,
     //badgeComponent


  ]
})
export class AyshaModule { }