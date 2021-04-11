import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './Design/Design.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { MyBadgeComponent } from './my-badge/my-badge.component';




@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
     DesignComponent,
     MyNavbarComponent,
     ListGroupComponent,
     MyBadgeComponent,
   
  ],
  exports: [
    DesignComponent,
     MyNavbarComponent,
     ListGroupComponent,
     MyBadgeComponent,
    
   


  ]
})
export class AyshaModule { }