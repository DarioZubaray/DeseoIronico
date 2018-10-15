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

    if( navParams.get( 'lista' ) ) {
        this.lista = navParams.get( 'lista' );
    } else {
      this.lista = new Lista( titulo );

      this.deseosServices.agregarLista( this.lista );
    }

    console.log( titulo );

  }

  agregarItem() {
    if( this.nombreItem.length === 0){
      return;
    }
    console.log( this.nombreItem );

    const nuevoItem = new ListaItem( this.nombreItem );

    this.lista.items.push(nuevoItem);
    this.deseosServices.guardarStorage();
    this.nombreItem = '';
  }

  actualizarItem( item: ListaItem ) {
    item.completado = !item.completado;

    const pendientes = this.lista.items.filter( itemData => {
      return !itemData.completado;
    }).length;

    console.log(pendientes);
    if( pendientes === 0) {
        this.lista.terminada = true;
        this.lista.terminadoEn = new Date();
    } else {
      this.lista.terminada = false;
      this.lista.terminadoEn = null;
    }

    this.deseosServices.guardarStorage();
  }

  borrarItem( i: number ) {
    this.lista.items.splice( i, 1 );
    this.deseosServices.guardarStorage();
  }
}
