import { Component } from '@angular/core';
import { DeseoServices } from '../../services/deseos.service';
import { NavController } from 'ionic-angular';
import { Lista } from '../../models/lista.model';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.component.html'
})
export class TerminadosPage {

  constructor(public deseosServices: DeseoServices, private navCtrl: NavController) {

  }

  listaSeleccionada(lista: Lista){
    this.navCtrl.push( AgregarPage, { titulo: lista.titulo, lista: lista }  );
  }

  borrarLista(lista: Lista) {
    this.deseosServices.borrarLista( lista );
  }
}
