import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BrandmarksPage } from '../brandmarks/brandmarks.page';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {
  public brandmarks: any[] = [];
  public today: Date = new Date();
  public dateValue: any = this.today.toLocaleDateString();
  public datePipe = new DatePipe('en-ZA');
  @Input() isAdd: boolean;
  public color:string = 'red';
  public health: string = 'excellent';
  public brandmarkCertificatePath: string = "../../../assets/img/empty.jfif";
  public animal:Animal;
  private file: File;
  public imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(private modalController: ModalController, private navCtrl: NavController,) { }

  ngOnInit() {
    this.dateValue = this.datePipe.transform(this.today, 'dd MMMM yyyy');  
    
  }

  initAnimal(){
    this.dateValue = this.datePipe.transform(new Date('2022-4-28'), 'dd MMMM yyyy');  
    this.animal = {
      breadTypeObj: {code: 1, text: 'Afrikaner', value:1},
      breadType: 'Afrikaner'
    }
    this.brandmarks.push({class: 'south', htmlCode: '&#66;', element: '<span class="south">&#81;</span>'});
    this.brandmarks.push({class: 'north', htmlCode: '&#8317;', element: '<span class="north">&#8317;</span>'});
    this.brandmarks.push({class: 'east', htmlCode: '&#66;', element: '<span class="east">&#87;</span>'});
    this.brandmarks.push({class: 'north', htmlCode: '0', element: '<span class="north">0</span>'});
    this.brandmarks.push({class: 'north', htmlCode: '0', element: '<span class="north">0</span>'});
    this.brandmarks.push({class: 'north', htmlCode: '2', element: '<span class="north">2</span>'});
  }

  onBack() {
    this.modalController.dismiss({
      isCancel: true,
      animal: undefined
    });
  }

  async showBrandmark() {
    const modal = await this.modalController.create({
      component: BrandmarksPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.brandmarks = data.brandmarks;
  }

  formatDate(data:Date) { 
    return this.datePipe.transform(data, 'dd MMMM yyyy');  
  }

  onSaveAndNext(){

  }

  onSave(){
    this.modalController.dismiss({
      isCancel: true,
      animal: undefined
    });
  }

}

export class Animal{
  breadType: string;
  breadTypeObj: any;
}
