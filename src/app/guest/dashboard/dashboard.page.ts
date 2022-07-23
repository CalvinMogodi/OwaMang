import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { BrandmarksPage } from 'src/app/brandmarks/brandmarks.page';
import { ReportLivestockPage } from '../report/report-livestock.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public lostAnimals: any[] = [1, 2, 3];
  public report: boolean = false;
  public brandmarks: any[] = [];
  public userRole: string = 'Farmer';

  constructor(private modalController: ModalController, private route: ActivatedRoute, public navCtrl: NavController) { 
    this.route.params.subscribe(params => {
      this.userRole = params["userRole"];            
  });
  }

  ngOnInit() {
  }

  async showBrandmark(){     
    const modal = await this.modalController.create({
      component: BrandmarksPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    await modal.present();  
    
    const { data } = await modal.onWillDismiss();
    this.brandmarks = data.brandmarks;
}

  async onReportLivestock() {
    const modal = await this.modalController.create({
      component: ReportLivestockPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,      
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 0.55,      
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
  }

  onBack(){
    if(this.userRole === 'Guest'){
      this.navCtrl.navigateRoot(['/home']); 
    }else{
      this.navCtrl.navigateRoot(['/farmer']); 
    }  
  }
}
