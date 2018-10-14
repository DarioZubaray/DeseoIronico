import { Component } from '@angular/core';
import { DeseoServices } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

  constructor( public deseosServices: DeseoServices) {

  }

  listaSeleccionada(lista: Lista){
    console.log(lista); 
  }
}
