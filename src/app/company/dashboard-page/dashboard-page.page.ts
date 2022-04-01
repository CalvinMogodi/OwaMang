import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BrandmarksPage } from 'src/app/brandmarks/brandmarks.page';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.page.html',
  styleUrls: ['./dashboard-page.page.scss'],
})
export class DashboardPagePage implements OnInit {

  public brandmarks: any;
  public searched: boolean = false;

  constructor(private modalController: ModalController, public navCtrl: NavController) { }

  ngOnInit() {
    this.searched = false;
  }

  async showBrandmark(isReserve: boolean) {
    const modal = await this.modalController.create({
      component: BrandmarksPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.searched = false;
    if (isReserve && !data.isCancel) {
      this.navCtrl.navigateRoot(['/farmers-result']);
    } else {
      if (!data.isCancel)
        this.searched = true;
    }
    this.brandmarks = data.brandmarks;
  }

  openFarmerDetails() {
    this.navCtrl.navigateRoot(['/farmer-details', { isFromCompany: true }]);
  }

}
