import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../../../services/compartido/compartido.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(public compartidoService: CompartidoService) { }

  ngOnInit(): void {
    this.actualiza();
    

  }

 public obtenerInfo(){

    let name: HTMLInputElement = <HTMLInputElement> document.getElementById('name');
    let email: HTMLInputElement = document.getElementById('email') as HTMLInputElement;

    name.value = this.compartidoService.name;
    email.value = this.compartidoService.email;

    console.log(name,email);
    console.log('Componete 2:', this.compartidoService);

  }


  
  public actualiza(){
    let   boton= document.getElementById('boton2');
     boton?.addEventListener("click", () => {
       this.obtenerInfo();
     })
 
   }


}

