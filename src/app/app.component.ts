import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    console.log('hello from appcompact');
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('hello from appcompact before spalshscreen hide  ');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log('hello from appcompact after spalshscreen hide  ');
    });
  }
}
