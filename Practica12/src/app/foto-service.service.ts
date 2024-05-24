import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';
import { WebView } from '@capacitor/core';
import {Filesystem, Directory} from '@capacitor/filesystem';
import {Preferences} from '@capacitor/preferences';

import { Foto } from './foto.model'

@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {
  public fotos: Foto[] = [];

  constructor() {
    
   }
 // async takePicture() {
 //   const image = await Camera.getPhoto({
 //     quality: 90,
  //    allowEditing: false,
  //    resultType: CameraResultType.Base64,
  //    source: CameraSource.Camera
  //  });

  //  return image.Base64String;
 // }

 
 
 public async addNewtoGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })
  }    //this.fotos.unshift({
      //filepath: '',
     //webViewPath: fotoCamara.webPath 
    //})
    public agregarFoto(fotoCamara: { webPath: string }): void {
      const foto: Foto = {
        filepath: 'ruta/a/la/foto', // Asigna un valor adecuado a filepath
        webViewPath: fotoCamara.webPath
      };
      this.fotos.unshift(foto); // Inserta al principio del arreglo
    }
  }
