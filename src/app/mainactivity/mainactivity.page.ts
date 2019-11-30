import { Component, OnInit } from '@angular/core';
import { ImagedownloaderService } from '../services/imagedownloader.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { PermissioncheckService } from '../services/permissioncheck.service';
import { AlertController } from '@ionic/angular';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { category } from '../models/category';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mainactivity',
  templateUrl: './mainactivity.page.html',
  styleUrls: ['./mainactivity.page.scss'],
})
export class MainactivityPage implements OnInit {
  public categorydataarr: category[] = [];
  imageSrc;
  constructor(private androidPermissions: AndroidPermissions, private imagedownloader: ImagedownloaderService, private androidservice: PermissioncheckService,
    private dialogs: Dialogs, private file: File, private webview: WebView, private route: Router) {
    this.androidservice.checkandassignpermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => {
        // console.log('from service callback  ' + JSON.stringify(result));
        if (result.hasPermission) {

          this.startservice();
        } else {
          this.askpermission();
        }
      }
    );
  }



  ngOnInit() {

  }

  askpermission() {


    this.dialogs.alert('permission required press allow ')
      .then((data) => {
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
          result => {
            console.log("jcdj" + result);
            if (result.hasPermission) {
              this.startservice();
            }
          }
        );
      })
      .catch(e => console.log('Error displaying dialog', e));
    //this.dialogs.confirm('hello').then((data)=>{console.log('skdfjkdbv  '+data);}).catch(e => {console.log('jsfndjn '+e);})
  }

  startservice() {
    //console.log('dndjj  j vhd v  ' + JSON.stringify(this.imagedownloader.categorydata));
    this.imagedownloader.getcategorydetails(function (data: any[], refresh: boolean) {
      console.log('in actovity 1111111111   ' + refresh);
      if (refresh) {
        for (const catvalue of data) {
          let urlval = this.file.externalRootDirectory + '.arka/category/' + catvalue._id + '.jpg';
          const catobj = new category();
          catobj.imgurl = this.webview.convertFileSrc(urlval);
          catobj.name = catvalue.name;
          catobj.id = catvalue._id;
          catobj.updatedate = catvalue.updated;
          this.categorydataarr.push(catobj);
        }
      } else {

        this.categorydataarr = [];
        for (const catvalue of data) {
          let urlval = this.file.externalRootDirectory + '.arka/category/' + catvalue._id + '.jpg';
          const catobj = new category();
          catobj.imgurl = this.webview.convertFileSrc(urlval);
          catobj.name = catvalue.name;
          catobj.id = catvalue._id;
          catobj.updatedate = catvalue.updated;
          this.categorydataarr.push(catobj);
        }
      }


    }.bind(this));
  }
  onClickMe(category: category) {
    console.log(category);
    this.route.navigate(['/itemgroup']);
  }
  // public callBackUpdateUIElements(value: any) {
  //   console.log('jnjfbhhvfhv   ' + value);
  //   console.log('dndjj  j vhd v  ' + JSON.stringify(value));
  //   this.categorydataarr = value;
  // }

}
