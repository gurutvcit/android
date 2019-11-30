import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { PermissioncheckService } from './services/permissioncheck.service';
import { ImagedownloaderService } from './services/imagedownloader.service';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    Device,
    PermissioncheckService,
    ImagedownloaderService,File,Dialogs,FileTransfer,WebView,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
