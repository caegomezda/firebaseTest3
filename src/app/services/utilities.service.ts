import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  dataDelivery:any;
  private dataUrl = environment.urlConfing.USERURL;
  constructor() { }

  async getDataDelivery(){
    return await this.dataDelivery;
  }

  async saveDataDelivery(data:any){
    this.dataDelivery = await data;
  }

  getUrlType(){
        return this.dataUrl;
  }
}
