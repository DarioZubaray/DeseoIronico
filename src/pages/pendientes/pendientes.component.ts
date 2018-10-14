import { Component } from '@angular/core';
import { DeseoServices } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

  constructor( public deseosServices: DeseoServices, private navCtrl: NavController ) {

  }

  listaSeleccionada(lista: Lista){
    console.log(lista);
  }

  irAgregar() {
    this.navCtrl.push( AgregarPage )
  }
}
