import { Component, Input } from '@angular/core';
import { Lista } from '../models/lista.model';
import { DeseoServices } from '../services/deseos.service';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html'
})
export class ListasComponent {

  @Input() completado: boolean = false;

  constructor( public deseosServices: DeseoServices, private navCtrl: NavController,
               private alertCtrl: AlertController) {

  }

  listaSeleccionada(lista: Lista){
    this.navCtrl.push( AgregarPage, { titulo: lista.titulo, lista: lista }  );
  }


  borrarLista(lista: Lista) {
    this.deseosServices.borrarLista( lista );
  }

  editarLista( lista: Lista, slidingItem: ItemSliding ) {
    slidingItem.close();

    const alerta = this.alertCtrl.create({
      title: 'Editar nombre',
      message: 'Nuevo nombre de la lista',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de lista',
        value: lista.titulo
      }],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            if( data.titulo.length === 0 ){
              return;
            }

            lista.titulo = data.titulo;
            this.deseosServices.guardarStorage();
          }
        }
      ]
    });

    alerta.present();
  }
}
