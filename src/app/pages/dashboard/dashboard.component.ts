import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  console.log('VAMOS A INICIALIZAR EL REPOSITORIO');
  }
  
  setMessage(){
	  console.log('Se agrega un mensaje a la rama develop');
  }

}
