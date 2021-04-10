import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './Design/Design.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
     DesignComponent
  ],
  exports: [
    DesignComponent,
  ]
})
export class AyshaModule { }