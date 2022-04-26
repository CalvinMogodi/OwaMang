import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-farmer-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class FarmerSearchPage implements OnInit {
  public noData: boolean = false;
  public farmers: any[] = [];
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.loadFarmers();
  }

  onSearch(){
    this.noData = false;
  }

  onCancel(){
    this.farmers = [];
    this.loadFarmers();
  }

  onClear(){
    this.farmers = [];
    this.loadFarmers();
  }

  searchById(e){
    if(e.target.value == ""){
      this.farmers = [];
      this.loadFarmers();
    }     
    else
      this.farmers = this.farmers.filter(f => f.idNo.includes(e.target.value));

    this.onSearch();
  }

  searchBySurname(){
    this.onSearch();
  }

  searchByPhoneNumber(){
    this.onSearch();
  }

  loadFarmers(){
    this.farmers.push({name: 'Finn', surname:"Smith", idNo:'623456487912', contactNo1:'011 254 2145', contactNo2:'011 236 5354', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Han', surname:"Joe", idNo:'723456487912', contactNo1:'011 254 2145', contactNo2:'011 236 5354', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Rey', surname:"Rey", idNo:'823456487912', contactNo1:'011 254 2145', contactNo2:'011 236 5354', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Luke', surname:"Jackson", idNo:'955252487912', contactNo1:'011 254 2145', contactNo2:'011 236 5354', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Matome', surname:"Moloi", idNo:'78456487912', contactNo1:'011 254 2145', contactNo2:'011 236 5354', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Jr.Luke', surname:"Jackson", idNo:'955252487912', contactNo1:'011 254 2145', contactNo2:'011 236 5354', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Han', surname:"Joe", idNo:'723456487912', contactNo1:'011 254 2145', contactNo2:'011 236 5354', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Rey', surname:"Rey", idNo:'923456487912', contactNo1:'011 254 2145', contactNo2:'011 236 5354', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Luke', surname:"Jackson", idNo:'555252487912', contactNo1:'011 254 2145', contactNo2:'011 236 5354', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Matome', surname:"Moloi", idNo:'78456487912', contactNo1:'011 254 2145', contactNo2:'011 236 5354', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Jr.Luke', surname:"Jackson", idNo:'975525248791', contactNo1:'011 254 2145', contactNo2:'011 236 5354', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
  }

  selectUser(farmer:any){
    this.modalController.dismiss({
      isCancel: false,
      farmer: this.farmers[2]
    });
  }

  onBack(){
    this.modalController.dismiss({
      isCancel: true,
      farmer: undefined
    });
  }

}
