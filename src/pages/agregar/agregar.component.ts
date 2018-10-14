import { Component } from '@angular/core';
import { DeseoServices } from '../../services/deseos.service';
import { Lista, ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarPage {

  lista: Lista;
  nombreItem : string = '';

  constructor( public deseosServices: DeseoServices, private navParams: NavParams) {

    const titulo = this.navParams.get('titulo');
    console.log( titulo );
    this.lista = new Lista( titulo );
  }

  agregarItem() {
    if( this.nombreItem.length === 0){
      return;
    }
    console.log( this.nombreItem );

    const nuevoItem = new ListaItem( this.nombreItem );

    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
  }

  actualizarItem( item: ListaItem ) {
    item.completado = !item.completado;
  }

}
