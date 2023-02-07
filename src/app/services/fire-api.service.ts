// import { Injectable } from '@angular/core';
// import { UtilitiesService } from './utilities.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {map} from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class FireApiService {
//   private  httpOptions:any= { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
//   constructor(private utilities:  UtilitiesService,
//               private http:HttpClient,) { }

  // async fetchUserInfo2Api(credential:any,urlType:any,params:any){
  //   let url = await this.utilities.getUrlType();
  //   credential = credential;
  //   let uid = "";
  //   let accessToken = "";
  //   let apiUrl = `${url}/${uid}.json?auth=${accessToken}`;
  //   let json = {}
  //   json = JSON.stringify(json);
  //   return  this.http.get(`${apiUrl}`, json).pipe(map( data => data)).toPromise();
  // }

  // async getDeliveryData(){
  //   let credential = ""
  //   let params = ""
  //   let result  = await this.fetchUserInfo2Api(credential,4,params);
  //   await this.getData(result,2);
  // }


  // async getData(dataJson:any,type:any){
  //   let data = [];
  //   if (type == 1) {
  //     for (let key in dataJson) {
  //       data = dataJson[key]
  //     }
  //   // this.utilities.saveDataUser(data);
  //   }else if (type === 2){
  //     for (let key in dataJson) {
  //       data.push(dataJson[key])
  //     }
  //   this.utilities.saveDataDelivery(data);
  //   }
//   }
// }
