import { Injectable } from '@angular/core';
import * as firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { TokenService } from './Auth/token.service';

firebase.default.initializeApp(environment.firebase)

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storageRef = firebase.default.app().storage().ref()

  constructor(private tokenService:TokenService) { }

  get user():string {
    return this.tokenService.getUserName()
  }

  async subirImagen(img64:any ,fileName:string, path:string) {

    try {
      let respuesta = await this.storageRef.child("/uploads/"+ path + this.user + "_" + fileName +Date.now()).putString(img64, 'data_url')
      return await respuesta.ref.getDownloadURL()
    }catch(err) {
      console.log(err)
      return null
    }
  }
}
