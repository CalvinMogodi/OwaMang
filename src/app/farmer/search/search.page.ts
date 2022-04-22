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
    this.farmers.push({name: 'Finn Smith', idNo:'623456487912', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Han Joe', idNo:'723456487912', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Rey Rey', idNo:'823456487912', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Luke Jackson', idNo:'955252487912', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Matome Moloi', idNo:'78456487912', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Jr.Luke Jackson', idNo:'955252487912', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Han Joe', idNo:'723456487912', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Rey Rey', idNo:'923456487912', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Luke Jackson', idNo:'555252487912', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Matome Moloi', idNo:'78456487912', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
    this.farmers.push({name: 'Jr.Luke Jackson', idNo:'975525248791', address: 'Listen, I have had a pretty messed up day...', icon: '../../../assets/img/farmer-placeholder1.png'});
  }

  selectUser(farmer:any){
    this.modalController.dismiss({
      isCancel: false,
      farmer: farmer
    });
  }

  onBack(){
    this.modalController.dismiss({
      isCancel: true,
      farmer: undefined
    });
  }

}
