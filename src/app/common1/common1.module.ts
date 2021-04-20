import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from   '@angular/platform-browser/animations';
import { Common1Component } from './common1.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  imports: [
    CommonModule, BrowserModule, BrowserAnimationsModule
  ],
  declarations: [
     Common1Component,
     NavComponent,
   
  ],
  exports: [
    Common1Component,
    NavComponent,
    
  ]
})
export class Common1Module { }