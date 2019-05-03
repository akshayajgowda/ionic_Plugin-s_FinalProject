import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private geolocation:Geolocation, private barcodeScanner: BarcodeScanner) {
    
  }

getLocation(){
  this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    console.log(resp.coords.latitude);
    console.log(resp.coords.longitude);
   }).catch((error) => {
     console.log('Error getting location', error);
   });
   
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
   });
}

onScanner() {
  this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
   }).catch(err => {
       console.log('Error', err);
   });
}

}
