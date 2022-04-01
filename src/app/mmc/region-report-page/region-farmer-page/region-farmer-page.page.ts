import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import { BreedPagePage } from 'src/app/breed/breed-page/breed-page.page';

@Component({
  selector: 'app-region-farmer-page',
  templateUrl: './region-farmer-page.page.html',
  styleUrls: ['./region-farmer-page.page.scss'],
})
export class RegionFarmerPagePage implements OnInit {

  constructor(public navCtrl: NavController,public modalController: ModalController, private popoverController: PopoverController) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.navigateRoot(['/region-report-page']);
  }

  async showBreed(e){     
    const siteInfo = { id: 1, name: 'edupala' };
    const popover = await this.popoverController.create({
      component: BreedPagePage,
      event: e,
      cssClass: 'popover_setting',
      componentProps: {
        site: siteInfo
      },
      translucent: true
    });

    popover.onDidDismiss().then((result) => {
      console.log(result.data);
    });

    return await popover.present();
    /** Sync event from popover component */

  }
}
