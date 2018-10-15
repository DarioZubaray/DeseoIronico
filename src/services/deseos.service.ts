import { Injectable } from '@angular/core'
import { Lista } from '../models';

@Injectable()
export class DeseoServices{

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
    console.log("DeseoService inicializado");
    /*
    const lista1 = new Lista('Recolectar Piedras del Infinito');
    const lista2 = new Lista('Hereos a vencer');

    this.listas.push(lista1, lista2);

    console.log(this.listas);
    */
  }

  agregarLista( lista: Lista) {
      this.listas.push( lista );
      this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if( localStorage.getItem( 'data' ) ) {
      this.listas = JSON.parse( localStorage.getItem( 'data' ) );
    } else {
      this.listas = [];
    }
  }

  borrarLista( lista: Lista ) {
    this.listas = this.listas.filter( listaData => {
      return listaData.id !== lista.id;
    });
    this.guardarStorage();
  }
}
