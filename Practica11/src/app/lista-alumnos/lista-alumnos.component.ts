import { Component, NgModule, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Alumno } from './alumno.model';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule.forRoot()
  ]
})
export class AppModule{}

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {
  
  favorito: any;
  constructor(private actionSheetController: ActionSheetController) { }

  result: string = '';

  agregaAlumno(): void {
    this.alumnos.push(this.alumno);

    this.alumno = {
      nombre: '',
      presente: false
    }
  }

  alumno: Alumno = {
    nombre: '',
    presente: false
  }

  alumnos: Alumno[] = [];//["Carlos", "Ximena", "Alberto", "Eduardo", "Barbara", "Georgina", "Kevin"];
   

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