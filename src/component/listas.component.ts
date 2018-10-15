import { Component, Input } from '@angular/core';
import { Lista } from '../models/lista.model';
import { DeseoServices } from '../services/deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html'
})
export class ListasComponent {
  
  @Input() completado: boolean = false;

  constructor( public deseosServices: DeseoServices, private navCtrl: NavController) {

  }

  listaSeleccionada(lista: Lista){
    this.navCtrl.push( AgregarPage, { titulo: lista.titulo, lista: lista }  );
  }


    borrarLista(lista: Lista) {
      this.deseosServices.borrarLista( lista );
    }
}
