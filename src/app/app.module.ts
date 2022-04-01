import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@ionic-native/Camera/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { File } from '@ionic-native/file';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashPage } from './splash/splash.page';
import { HomePage } from './home/home.page';
import { Chart } from 'chart.js';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    SplashPage,Camera,
    FileTransfer,
    HomePage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [
    Chart
  ],
})
export class AppModule {}
