import { Injectable } from '@angular/core';
import { AndroidPermissions, AndroidPermissionResponse } from '@ionic-native/android-permissions/ngx';
import { Device } from '@ionic-native/device/ngx';


@Injectable({
  providedIn: 'root'
})
export class PermissioncheckService {

  constructor(private androidPermissions: AndroidPermissions,private device: Device) { }

  checkandassignpermission(permissions) : Promise<AndroidPermissionResponse> {
   return this.androidPermissions.checkPermission(permissions)
  }


  isandroid() : string {
    let plt = this.device.platform;
    return plt;
  }
}
