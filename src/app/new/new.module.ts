import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from "./app/app.module";
import { AyshaModule } from "./Aysha/Aysha.module";

@NgModule({
  imports: [
    CommonModule, AppModule, AyshaModule
  ],
  declarations: []
})
export class NewModule { }