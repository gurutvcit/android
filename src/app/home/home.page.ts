import { Component } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { Router } from '@angular/router';
import { PermissioncheckService } from '../services/permissioncheck.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
  constructor(private device: Device,private route: Router,private androidservice: PermissioncheckService) {
    console.log('hello this is msg');
    // console.log('Device UUID is: ' + this.device.platform);
    // console.log('Device UUID is: ' + this.device.model);
    // console.log('Device UUID is: ' + this.device.serial);
    // console.log('Device UUID is: ' + this.device.version);
    // console.log('Device UUID is: ' + this.device.manufacturer);
    // console.log('Device UUID is: ' + this.device.cordova);
    // console.log('Device UUID is: ' + this.device.uuid);
    
    console.log('from service    '+androidservice.isandroid.toString());
    if(this.device.platform.endsWith("Android")){
      this.route.navigate(['/androidruntimepermission']);
    }
  }


  
}
