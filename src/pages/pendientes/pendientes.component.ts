import { Component } from '@angular/core';
import { DeseoServices } from '../../services/deseos.service';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

  constructor( public deseosServices: DeseoServices) {
    
  }
}
