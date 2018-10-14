import { Component } from '@angular/core';
import { DeseoServices } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarPage {

  lista: Lista;

  constructor( public deseosServices: DeseoServices, private navParams: NavParams) {

    const titulo = this.navParams.get('titulo');

    console.log( titulo );

    this.lista = new Lista( titulo );
  }

}
