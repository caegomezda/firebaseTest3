import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { UtilitiesService } from '../services/utilities.service';
// import { FireApiService } from '../services/fire-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // deliveryData:Observable<any[]>;
  isDeliveryDataLoad:Boolean = false;
  documents: any[] = [];
  data:any;
  constructor(private firestore: AngularFirestore,
              private utilities: UtilitiesService,
              // private firebase: FireApiService
              ) {
    // this.deliveryData = this.firestore.collection('imgMapParking').valueChanges()

    // this.firestore.collection('imgMapParking')
    // .valueChanges()
    // .subscribe(docs => {
    //   this.documents = docs;
    //   this.isDeliveryDataLoad = true
    // });
    this.data = this.firestore.collection('imgMapParking')
    .valueChanges()
    .subscribe(docs => {
      this.documents = docs;
      this.isDeliveryDataLoad = true
    });
  }

  ionViewWillEnter(){

    this.getDeliveryData()
    
  }

  async getDeliveryData(){
    await this.firestore.collection('imgMapParking')
    .valueChanges()
    .subscribe(docs => {
      // this.documents = docs;
      // console.log(this.documents);
      this.saveData(docs)

    });
    // console.log(this.data);
    console.log(this.isDeliveryDataLoad);
      
    // console.log(this.documents);
    // console.log(result); 
  }

  async saveData(docs:any){
    this.documents = docs;
    console.log(this.documents);
    this.isDeliveryDataLoad = true

  }

}
