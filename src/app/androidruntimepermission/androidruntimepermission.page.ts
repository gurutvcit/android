import { Component, OnInit } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { PermissioncheckService } from '../services/permissioncheck.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-androidruntimepermission',
  templateUrl: './androidruntimepermission.page.html',
  styleUrls: ['./androidruntimepermission.page.scss'],
})
export class AndroidruntimepermissionPage implements OnInit {
  stringper: string[] = [



  ]

  PERMISSION = [
    this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
    this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
    this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
    this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
  ];
  constructor(private androidPermissions: AndroidPermissions, private route: Router, private androidservice: PermissioncheckService) {

    this.askpermission(this.PERMISSION);

  }

  ngOnInit() {
  }

  askpermission(PERMISSION: string[]): void {

    this.androidservice.checkandassignpermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        console.log('from service callback  ' + JSON.stringify(result));
      }
    );
    // this.androidPermissions.checkPermission(permissions).then(
    //   result => {//console.log('Has permission?',result.hasPermission);
    //   console.log('jfdjbf f vfh vf v '+result.hasPermission);
    //   if(!result.hasPermission){
    //     this.androidPermissions.requestPermission(permission)
    //   }
    // },
    //   err => {this.androidPermissions.requestPermission(permission)
    //   }
    // );
    this.androidPermissions.requestPermissions(PERMISSION).then(
      result => {
        console.log('permissions are   ' + JSON.stringify(result));
        this.route.navigate(['/mainactivity']);
      }
    );
  }



}
