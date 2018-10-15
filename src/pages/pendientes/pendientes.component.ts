  import { Component } from '@angular/core';
import { DeseoServices } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

  constructor( public deseosServices: DeseoServices, private navCtrl: NavController,
                private alertCtrl: AlertController ) {

  }

  listaSeleccionada(lista: Lista){
    console.log(lista);

    this.navCtrl.push( AgregarPage, { titulo: lista.titulo, lista: lista }  );
  }

  irAgregar() {
    //this.navCtrl.push( AgregarPage )

    const alerta = this.alertCtrl.create({
      title: 'Nueva lista',
      message: 'Nombre de la nueva lista que desea',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Agregar',
          handler: data => {
            if( data.titulo.length === 0 ){
              return;
            }
            this.navCtrl.push( AgregarPage, { titulo: data.titulo } );
            console.log('Saved clicked');
          }
        }
      ]
    });

    alerta.present();
  }

  borrarLista(lista: Lista) {
    this.deseosServices.borrarLista( lista );
  }
}
