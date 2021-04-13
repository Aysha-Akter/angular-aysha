import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
 component = ['navbar','badge','list-group','bootstrap4','accordion','list-badge','alert','navbar-badge','breadcrumb'];
  activeComponent = 'navbar';
  onComponent(component:string){
  this.activeComponent = component;
  }
}
