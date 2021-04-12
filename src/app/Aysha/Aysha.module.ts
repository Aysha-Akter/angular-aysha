import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from   '@angular/platform-browser/animations';
import { DesignComponent } from './Design/Design.component';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { MyBadgeComponent } from './my-badge/my-badge.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionModule,  } from 'ngx-bootstrap/accordion';






@NgModule({
  imports: [
    CommonModule, BrowserModule, BrowserAnimationsModule, AccordionModule.forRoot()
  ],
  declarations: [
     DesignComponent,
     MyNavbarComponent,
     ListGroupComponent,
     MyBadgeComponent,
     AccordionComponent,
   
  ],
  exports: [
    DesignComponent,
     MyNavbarComponent,
     ListGroupComponent,
     MyBadgeComponent,
     AccordionComponent,
    
   


  ]
})
export class AyshaModule { }