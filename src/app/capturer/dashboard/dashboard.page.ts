import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BrandmarksPage } from 'src/app/brandmarks/brandmarks.page';
import { ActivatedRoute } from '@angular/router';
import { FarmerSearchPage } from 'src/app/farmer/search/search.page';
import { AddLivestockPage } from '../add-livestock/add-livestock.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public currentModal:any = null;
  public livestocks: any[] = [];
  public isAdded: boolean = false;
  public date = new Date(Date.now());
  public currentMonth =  this.date.toLocaleString('en-ZA', {month: 'long'}); // {month:'long'}

  constructor(private modalController: ModalController,public navCtrl: NavController) { }

  ngOnInit() {
  }

 
  async openAddLivestockModal() {
    const modal = await this.modalController.create({
      component: AddLivestockPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    await modal.present();  
    
    const { data } = await modal.onWillDismiss();
    if(data.data){
      this.isAdded = true;
    }
  }

  addFarmer(){
    this.navCtrl.navigateRoot(['/register']);     
  }

  async editFarmer(){
    const modal = await this.modalController.create({
      component: FarmerSearchPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });

    await modal.present();  
    
    const { data } = await modal.onWillDismiss();
    const farmer: any = data.farmer;
    if(farmer){
        //var queryParams: JSON.stringify(farmer);
      this.navCtrl.navigateRoot(['/register',{ farmer: true}]);
    }
  }

  async addLivestock(){
    const modal = await this.modalController.create({
      component: FarmerSearchPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });

    await modal.present();  
    
    const { data } = await modal.onWillDismiss();
    const farmer: any = data.farmer;
    if(farmer){
      this.openAddLivestockModal();
    }
    
  }

  async editLivestock(){     
      const modal = await this.modalController.create({
        component: BrandmarksPage,
        cssClass: 'my-custom-class',
        swipeToClose: true,
      });
      await modal.present();  
      
      const { data } = await modal.onWillDismiss();
      const brandmark = data.brandmarks;
      if(brandmark){
        this.openAddLivestockModal();
      }
  }

  async openMenu() {
    //await menuController.open();
  }
}
