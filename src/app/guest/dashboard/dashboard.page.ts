import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { BrandmarksPage } from 'src/app/brandmarks/brandmarks.page';
import { ReportLivestockPage } from '../report/report-livestock.page';
import { MockDataService } from '../../services/data';
import { Animal } from '../../models/animal';
import { element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public lostAnimals: Array<Animal> = [];
  public report: boolean = false;
  public brandmarks: any[] = [];
  public userRole: string = 'Farmer';

  constructor(private mockDataService: MockDataService, private modalController: ModalController, private route: ActivatedRoute, public navCtrl: NavController) {
    this.route.params.subscribe(params => {
      this.userRole = params["userRole"];
    });
    this.lostAnimals = mockDataService.getAllLostAnimals();
  }

  ngOnInit() {
  }

  async showBrandmark() {
    const modal = await this.modalController.create({
      component: BrandmarksPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();

    this.brandmarks = this.brandmarks;
    let brandmarkCodes = data.brandmarks.map(d => d.htmlCode);
    this.lostAnimals = [];
    
    this.mockDataService.getAllAnimals().forEach( element => {
      brandmarkCodes.forEach(item => {
       element.brandmark.forEach(child => {
        if(child.htmlCode === item){
          this.lostAnimals.push(element);
        }       
      });   
    })
  })
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

  onBack() {
    if (this.userRole === 'Guest') {
      this.navCtrl.navigateRoot(['/home']);
    } else {
      this.navCtrl.navigateRoot(['/farmer']);
    }
  }
}
