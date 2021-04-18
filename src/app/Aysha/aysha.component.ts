import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aysha',
  templateUrl: './aysha.component.html',
  styleUrls: ['./aysha.component.css']
})
export class AyshaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  component = ['navbar','badge','list-group','bootstrap4','accordion','list-badge','alert','navbar-badge','breadcrumb','button','carousel','accordion-collapse','pagination','progress','scrollspy','tooltips','carousel-button'];
  activeComponent = 'navbar';
  onComponent(component:string){
  this.activeComponent = component;
  }
}