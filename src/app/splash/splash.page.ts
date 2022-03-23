import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppPage } from 'e2e/src/app.po';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})

export class SplashPage implements OnInit {
  public showSplash = false;

  constructor(public navCtrl: NavController) {
    setTimeout(() => {
      navCtrl.navigateRoot(['/home'])
    }
      , 3000);
  }

  ngOnInit() {

  }

}
