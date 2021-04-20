import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AyshaModule } from "./Aysha/Aysha.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CommonComponent } from './common/common.component';


@NgModule({
  imports: [BrowserModule, 
            FormsModule, 
            AyshaModule, ],

  declarations: [AppComponent, 
                 HelloComponent, 
                 CommonComponent],

  bootstrap: [AppComponent]
})
export class AppModule {}
