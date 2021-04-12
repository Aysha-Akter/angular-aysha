import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AyshaModule } from "./Aysha/Aysha.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AccordionModule } from "ngx-bootstrap/accordion";

@NgModule({
  imports: [BrowserModule, FormsModule, AyshaModule, AccordionModule.forRoot()],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
