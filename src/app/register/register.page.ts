import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { BrandmarksPage } from '../brandmarks/brandmarks.page';
import { LocationAutocompletePage } from '../location-autocomplete/location-autocomplete.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public showMsg: boolean = false;
  public showLink: boolean = false;
  public isIndividual: boolean = false;
  public isCompany: boolean = false;
  public gender: string = '';
  public firstMsg: string = '';
  public secondMsg: string = '';
  public brandmarks: any[] = [];
  public address: string = '';
  public farmAddress: string = '';
  public farmer: any = {
    name: undefined, 
    surname: undefined, 
    idNo: undefined, 
    contactNo1: undefined,  
    contactNo2: undefined, 
    email: undefined, 
    address:  undefined, 
    farmAddress:  undefined, 
    icon: undefined, 
  };
  
  public isEdit: boolean = false;
  
  constructor(public modalController: ModalController,public navCtrl: NavController, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.farmer = JSON.parse(params["farmer"]);
      if(this.farmer){       
        this.intiUpdate();
      }        
  });
  }

  ngOnInit() {
    
  }

  intiUpdate(){
    this.isEdit = true;
    this.farmer = {name: 'Finn', surname:"Smith", idNo:'623456487912', contactNo1:'011 254 2145', contactNo2:'011 236 5354', email:'test@test.com', address: 'The Beach Hotel, Marine Drive, Summerstrand, Gqeberha, South Africa', farmAddress: 'The Beach Hotel, Marine Drive, Summerstrand, Gqeberha, South Africa', icon: '../../../assets/img/farmer-placeholder1.png'};
    this.address = this.farmer.address;
    this.farmAddress = this.farmer.farmAddress;
    this.isIndividual = true;
    this.gender = 'Male';
  }

  onSave(){
    this.firstMsg = 'Password has been successfully updated,';
    this.secondMsg = ' to return to login.';
    this.showMsg = true;
    this.showLink = true;
    this.onBack();
  }

  onSaveAndNext(){
    this.address = '';
    this.farmAddress = '';
    this.isIndividual = false;
    this. isCompany = false;
    this.gender = '';
  }

  onIdInput(e){
    this.gender = '';
    if(e.target.value != "" && e.target.value.length > 6){
      var genderId = e.target.value.charAt(6);
      this.gender = genderId >= 5 ? 'Male' : 'Female'
    }
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

  onBack(){
    this.navCtrl.navigateRoot(['/capturer']); 
  }

  async showAddressModal() {
    const modal = await this.modalController.create({
      component: LocationAutocompletePage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    return data;
  }

  async setFarmAddress(){
    var address = await this.showAddressModal();
    this.farmAddress = address;
  }

  async setAddress(){
    var address = await this.showAddressModal();
    this.address = address;
  }
}
