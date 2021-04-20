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
import { AlertComponent } from './alert/alert.component';
import { NavbarBadgeComponent } from './navbar-badge/navbar-badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AccordionCollapseComponent } from './accordion-collapse/accordion-collapse.component';
import { PaginationComponent } from './pagination/pagination.component';

import { ProgressComponent } from './progress/progress.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselButtonComponent } from './carousel-button/carousel-button.component';
import { AyshaComponent } from './aysha.component';
import { TestComponent } from './test/test.component';





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
     AlertComponent,
     NavbarBadgeComponent,
     BreadcrumbComponent,
     ButtonComponent,
     ButtonGroupComponent,
     CarouselComponent,
     AccordionCollapseComponent,
     PaginationComponent,
     ProgressComponent,
     ScrollspyComponent,
     TooltipsComponent,
     CarouselButtonComponent,
     AyshaComponent,
     TestComponent,
   
  ],
  exports: [
    AyshaComponent,
    DesignComponent,
     MyNavbarComponent,
     ListGroupComponent,
     MyBadgeComponent,
     AccordionComponent,
    ListBadgeComponent,
    AlertComponent,
    NavbarBadgeComponent,
    BreadcrumbComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CarouselComponent,
    AccordionCollapseComponent,
    PaginationComponent,
    ProgressComponent,
    ScrollspyComponent,
    TooltipsComponent,
    CarouselButtonComponent
    
  ]
})
export class AyshaModule { }