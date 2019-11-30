import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ImagedownloaderService {
  public arkacloud = 'http://192.168.43.125:3000/';
  public categoryDetailURL = this.arkacloud + 'category';
  public categoryimgurl = this.arkacloud + '/categoryimg/';
  public categorydata;

  fileTransfer: FileTransferObject = this.transfer.create();
  constructor(private http: HttpClient, private file: File, private transfer: FileTransfer) { }

  getcategorydetails(callBackUpdateUIElements: any): void {

    this.CreateDirectory(callBackUpdateUIElements);
  }
  //Observable<category[]>
  public errohandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'server error');
  }


  CreateDirectory(callBackUpdateUIElements: any) {

    this.file.checkDir(this.file.externalRootDirectory, '.arka').then(response => {
      // console.log('Directory exists in arka ' + JSON.stringify(response));
      this.createcategoryfolder(callBackUpdateUIElements);
    }).catch(err => {
      console.log('Directory doesn\'t exist in arka ' + JSON.stringify(err));
      this.file.createDir(this.file.externalRootDirectory, '.arka', false).then(response => {
        // console.log('Directory create in arka ' + JSON.stringify(response));
        this.createcategoryfolder(callBackUpdateUIElements);
      }).catch(err => {
        console.log('Directory no create in arka ' + JSON.stringify(err));
      });
    });

  }
  createcategoryfolder(callBackUpdateUIElements: any) {
    this.file.checkDir(this.file.externalRootDirectory + '.arka/', 'category').then(response => {
      // console.log('Directory exists category' + JSON.stringify(response));
      this.getcategorydata(callBackUpdateUIElements);
    }).catch(err => {
      console.log('Directory doesn\'t exist category' + JSON.stringify(err));
      this.file.createDir(this.file.externalRootDirectory + '.arka/', 'category', false).then(response => {
        //console.log('Directory create category ' + JSON.stringify(response));
        this.getcategorydata(callBackUpdateUIElements);
      }).catch(err => {
        console.log('Directory no create category ' + JSON.stringify(err));
      });
    });
  }

  getcategorydata(callBackUpdateUIElements: any) {
    const catcall = this.http.get<any[]>(this.categoryDetailURL)
    catcall.pipe(catchError(this.errohandler)).subscribe(data => {
      // console.log(JSON.stringify(data));
      this.categorydata = data;
      //const usersJson: any[] = Array.of(data);

      // console.log(data.length);

      // for (const user of data) {
      //   const val = user;
      //   console.log('jfbf  ' + JSON.stringify(val));
      //   const dat = val.updated;
      //   console.log('date value   '+dat);
      //   const d1 = new Date(dat);
      //   console.log('date from data     '+d1.getHours+'   '+d1.getMinutes +'   '+d1);
      //   const d2 = new Date();
      //   console.log('date from device     '+d2.getHours+'   '+d2.getMinutes+'   '+d2);
      //   if(d1 === d2){
      //     console.log('date equalsss');

      //   }
      //   if(d1 > d2){
      //     console.log(d1 +' > '+d2);
      //   }
      //   if(d1< d2){
      //     console.log(d1 +' < '+ d2);
      //   }
      // }
      this.checkfilesandread(data, callBackUpdateUIElements);
      //this.downloadcatimages(data);
      callBackUpdateUIElements(data, true);
    });
  }

  checkfilesandread(data: any[], callBackUpdateUIElements: any) {
    this.file.checkFile(this.file.externalRootDirectory + '.arka/category/', 'category.json').then(res => {
      console.log('File exists:');
      // console.log(JSON.stringify(res));
      this.readjsonfile(data, callBackUpdateUIElements);
    }).catch(err => {
      console.log(JSON.stringify(err));
      const strdata: string = JSON.stringify(data)

      // this.file.createFile(this.file.externalRootDirectory + '.arka/category/', 'category.json', false);
      this.file.writeFile(this.file.externalRootDirectory + '.arka/category/', 'category.json', strdata, { replace: true }).then(
        (res) => {
          // console.log(JSON.stringify(res));
          this.comparedata(data, null, false, callBackUpdateUIElements);
        }
      ).catch(err => {
        console.log(JSON.stringify(err));
      });

    });

  }

  readjsonfile(data: any[], callBackUpdateUIElements: any) {
    this.file.readAsText(this.file.externalRootDirectory + '.arka/category/', 'category.json').then(
      (res) => {
        this.comparedata(data, JSON.parse(res), true, callBackUpdateUIElements);
      }
    ).catch(err => {
      console.log(JSON.stringify(err));
    })
  }

  comparedata(newdata: any[], olddata: any[], iscompare: boolean, callBackUpdateUIElements: any) {
    let updateditem: any[] = [];
    if (iscompare) {


      newdata.forEach((val, i) => {
        let isdataavail = false;
        let isdataupdae = false;
        olddata.forEach((checkval, j) => {
          if (val._id === checkval._id) {
            isdataavail = true;
            const dnew = new Date(val.updated);
            const dold = new Date(checkval.updated);
            if (dnew > dold) {
              isdataupdae = true;
              updateditem.push(val);
            }
          }


        });
        if ((!isdataavail) && (!isdataupdae)) {
          updateditem.push(val);
        }
      });

    } else {
      updateditem = newdata;
    }
    if (updateditem.length > 0) {
      this.downloadcatimages(updateditem,newdata, callBackUpdateUIElements);
    }
    this.updatejson(newdata);
  }


  updatejson(data: any[]) {

    const strdata: string = JSON.stringify(data)

    // this.file.createFile(this.file.externalRootDirectory + '.arka/category/', 'category.json', false);
    this.file.writeFile(this.file.externalRootDirectory + '.arka/category/', 'category.json', strdata, { replace: true }).then(
      (res) => {
        console.log(JSON.stringify(res));

      }
    ).catch(err => {
      console.log(JSON.stringify(err));
    });
  }

  downloadcatimages(data: any[],actdata:any[], callBackUpdateUIElements: any) {
    // const catJson: any[] = Array.of(data);
    const lastdata = data[data.length - 1];
    for (const singlejson of data) {
      console.log(this.categoryimgurl + singlejson._id + '.jpg');
      this.fileTransfer.download(
        this.categoryimgurl + singlejson._id + '.jpg',
        this.file.externalRootDirectory + '.arka/category/' + singlejson._id + '.jpg'
      ).then((entry) => {
        try {
          console.log('vaue is entry    ' + JSON.stringify(entry));
          console.log('dkjf jdfj  ' + entry.name);
          console.log('dkjf jdfj  ' + lastdata._id + '.jpg');
          console.log('dkjf jdfj  ' + entry.name.endsWith(lastdata._id + '.jpg'));
          if (entry.name.endsWith(lastdata._id + '.jpg')) {
            callBackUpdateUIElements(actdata, false);
          }
        } catch (e) {
          console.log(e);
        }
      }).catch(err => {
        console.log('errorrrrr  ' + JSON.stringify(err));
      });
    }

  }




}

