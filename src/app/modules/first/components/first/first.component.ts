import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../../../services/compartido/compartido.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {



  constructor( private compartidoService: CompartidoService) { 
    
  }

  ngOnInit(): void {
    this.fillForm();
  }
 

  public fillForm(){
   let   boton= document.getElementById('boton1');
    boton?.addEventListener("click", () => {
      this.compartidoService.name= "Isabel";
      this.compartidoService.email= "isa@gmail.com";
      console.log('Componente 1:',this.compartidoService);
    })

  }
 

}