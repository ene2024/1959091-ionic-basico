import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { IonicModule } from '@ionic/angular';
import { Foto } from '../foto.model';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})


export class CameraComponent  implements OnInit {


  constructor(private fotoService: FotoServiceService) {
    this.fotos = this.fotoService.fotos;
   }

  ngOnInit() {}

  tomarFoto() {
    this.fotoService.addNewtoGallery().then((photo) => {
    console.log('Foto tomada:', photo);
    //logica para tomar foto
  });
  }

  public fotos: Foto[] = [];
}
