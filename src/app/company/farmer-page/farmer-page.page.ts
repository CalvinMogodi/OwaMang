import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BrandmarksPage } from 'src/app/brandmarks/brandmarks.page';

@Component({
  selector: 'app-farmer-page',
  templateUrl: './farmer-page.page.html',
  styleUrls: ['./farmer-page.page.scss'],
})
export class FarmerPagePage implements OnInit {
  public brandmarks: any = [];
  constructor(private modalController: ModalController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async showBrandmark(isReserve: boolean) {
    const modal = await this.modalController.create({
      component: BrandmarksPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (isReserve && !data.isCancel) {
      this.navCtrl.navigateRoot(['/farmers-result']);
    }
    this.brandmarks = data.brandmarks;
  }

  onCancel() {
    this.navCtrl.navigateRoot(['/company']);
  }

  openFarmerDetails() {
    this.navCtrl.navigateRoot(['/farmer-details']);
  }

}
