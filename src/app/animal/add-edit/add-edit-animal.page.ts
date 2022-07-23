import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { BrandmarksPage } from '../../brandmarks/brandmarks.page';

@Component({
  selector: 'app-add-edit-animal',
  templateUrl: './add-edit-animal.page.html',
  styleUrls: ['./add-edit-animal.page.scss'],
})
export class AddEditAnimalPage implements OnInit {
  public brandmarks: any[] = [];
  public today: Date = new Date();
  public dateValue: any = this.today.toLocaleDateString();
  public datePipe = new DatePipe('en-ZA');
  @Input() isEdit: boolean;
  public color:string = 'red';
  public health: string = 'excellent';
  public brandmarkCertificatePath: string = "../../../assets/img/empty.jfif";
  public animal:Animal = {};
  private file: File;
  public imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(private modalController: ModalController, private route: ActivatedRoute, public navCtrl: NavController) {
    this.route.params.subscribe(params => {
      this.isEdit = !JSON.parse(params["isEdit"]);
      if(!this.isEdit){       
        this.initAnimal();
      }        
    });
  }

  ngOnInit() {
    this.dateValue = this.datePipe.transform(this.today, 'dd MMMM yyyy');  
    
  }

  initAnimal(){
    this.dateValue = this.datePipe.transform(new Date('2022-4-28'), 'dd MMMM yyyy');  
    this.animal.breedTypeObj = {code: 1, text: 'Afrikaner', value:1};
    this.animal.breedType = 'Afrikaner';

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
    this.navCtrl.navigateRoot(['/search-animal']);
  }

  onSave(){
    this.navCtrl.navigateRoot(['/capturer']);
  }
}

export class Animal{
  breedType?: string;
  breedTypeObj?: any;
}
