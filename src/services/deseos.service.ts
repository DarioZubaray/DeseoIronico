import { Injectable } from '@angular/core'
import { Lista } from '../models/lista.model';

@Injectable()
export class DeseoServices{

  listas: Lista[] = [];

  constructor() {
    console.log("DeseoService inicializado");

    const lista1 = new Lista('Recolectar Piedras del Infinito');
    const lista2 = new Lista('Hereos a vencer');

    this.listas.push(lista1, lista2);

    console.log(this.listas);
  }
}
