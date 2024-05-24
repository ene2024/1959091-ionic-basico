import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {
  alumnos: any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Barbara", "Georgina", "Kevin"];
   alumno = [
    { nombre: 'Carlos', favorito: false},
    { nombre: 'Ximena', favorito: false},
   ];
  favorito: any;
  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {}

//}

async presentActionSheet(alumno: String) {
  const actionSheet = await this.actionSheetController.create({
    header: 'Opciones de Eliminacion',
    buttons: [
      {
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteAlumno(alumno);
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }
    ]
  });
  await actionSheet.present();
}

addToFavorites(alumno: String) {
  this.favorito.push(alumno);
  console.log('Agregar a favoritos:', alumno);
}

deleteAlumno(alumno: String){
  this.presentActionSheet(alumno);
}
}