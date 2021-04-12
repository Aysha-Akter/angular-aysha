import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from   '@angular/platform-browser/animations';
import { DesignComponent } from './Design/Design.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { MyBadgeComponent } from './my-badge/my-badge.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ListBadgeComponent } from './list-badge/list-badge.component';





@NgModule({
  imports: [
    CommonModule, BrowserModule, BrowserAnimationsModule
  ],
  declarations: [
     DesignComponent,
     MyNavbarComponent,
     ListGroupComponent,
     MyBadgeComponent,
     AccordionComponent,
     ListBadgeComponent,
   
  ],
  exports: [
    DesignComponent,
     MyNavbarComponent,
     ListGroupComponent,
     MyBadgeComponent,
     AccordionComponent,
    ListBadgeComponent,
    
   


  ]
})
export class AyshaModule { }