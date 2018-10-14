import { Component } from '@angular/core';
import { DeseoServices } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarPage {

  constructor( public deseosServices: DeseoServices) {

  }

}
