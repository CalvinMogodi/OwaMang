import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, NavController } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { BrandmarksPage } from 'src/app/brandmarks/brandmarks.page';
import { LocationAutocompletePage } from 'src/app/location-autocomplete/location-autocomplete.page';
import { FarmerSearchPage } from 'src/app/farmer/search/search.page';
import { AddEditAnimalPage } from 'src/app/animal/add-edit/add-edit-animal.page';


@Component({
  selector: 'app-add-livestock',
  templateUrl: './add-livestock.page.html',
  styleUrls: ['./add-livestock.page.scss'],
  providers: [FileTransfer]
})
export class AddLivestockPage implements OnInit {
  public address: any;
  public livestock: any;
  public startdate: string = new Date().toISOString();
  public popoverDate: string = new Date().toISOString();
  public date: Date = new Date();
  public croppedImagePath = "";
  public isLoading = false;
  public status1: string = "Alive";
  public status3: string = "Alive";
  public status2: string = "Alive";
  public status4: string = "Alive";
  public brandmarks: any[] = [];
  public brandmarkCertificatePath: string = "../../../assets/img/empty.jfif";
  public uploads: any[] = [{ imgUrl: "../../../assets/img/empty.jfif", title: 'Brandmark certificate', description: 'Brandmark certificate description, Brandmark certificate description, Brandmark certificate description, Brandmark certificate description, Brandmark certificate description,' },
  { imgUrl: "url(../../../assets/img/empty.jfif)", title: 'Owner ID copy', description: 'Brandmark certificate description, Brandmark certificate description, Brandmark certificate description, Brandmark certificate description, Brandmark certificate description,' },
  { imgUrl: "url(../../../assets/img/empty.jfif)", title: 'Proof of address', description: 'Brandmark certificate description, Brandmark certificate description, Brandmark certificate description, Brandmark certificate description, Brandmark certificate description,' },
  { imgUrl: "url(../../../assets/img/empty.jfif)", title: 'Livestock photo', description: 'Brandmark certificate description, Brandmark certificate description, Brandmark certificate description, Brandmark certificate description, Brandmark certificate description,' }];
  private file: File;
  public imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  public isPopoverOpen: boolean = true;
  constructor(private modalController: ModalController, private navCtrl: NavController,
    public actionSheetController: ActionSheetController,public alertController: AlertController,
    private transfer: FileTransfer) {
    this.address = {
      place: ''
    };
  }

  ngOnInit() {
  }
  

  async showAddressModal() {
    const modal = await this.modalController.create({
      component: LocationAutocompletePage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.address.place = data;
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true,
      brandmarks: null
    });
  }

  setDateofbirth(date: any) {
    this.date = new Date(date);

  }

  onConfirm() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true,
      brandmarks: this.livestock
    });
  }
  fileTransfer: FileTransferObject = this.transfer.create();


  // full example
  upload() {
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'name.jpg',
      headers: {}
    }

    this.fileTransfer.upload('&lt;file path>', '&lt;api endpoint>', options)
      .then((data) => {
        // success
      }, (err) => {
        // error
      })
  }

  download() {
    const url = 'http://www.example.com/file.pdf';
    this.fileTransfer.download(url, 'file.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }

  brandmarkCertificateChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.brandmarkCertificatePath = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  async showBrandmark(e) {
    const modal = await this.modalController.create({
      component: BrandmarksPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.brandmarks = data.brandmarks;
  }

  onCancel() {
    this.modalController.dismiss({
      data: null
    });
  }

  onSubmit() {
    this.modalController.dismiss({
      data: { data: '' }
    });
  }

  onFileChange(event, upload) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        upload.imgUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  setStatus(name, index){
    switch(index){
      case 1: 
        this.status1 = name
        break;
      case 2: 
        this.status2 = name
        break;
      case 3: 
        this.status3 = name
        break;
      case 4: 
        this.status4 = name
        break;
    }
  }

  async onStatusConfirm(name, index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',      
      message: '<strong>Are you sure</strong> this animal is '+ name + '?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
           
          }
        }, {
          text: 'Yes',
          id: 'confirm-button',
          handler: () => {
            this.setStatus(name, index);
          }
        }
      ]
    });

    await alert.present();
  }

  async addEditAnimal(isAdd:boolean){
    this.modalController.dismiss({
      openAnimalPage: true,
      brandmarks: null
    });    
  }

  async onBack(){
    const modal = await this.modalController.create({
      component: FarmerSearchPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });

    await modal.present();  
    
    const { data } = await modal.onWillDismiss();
    const farmer: any = data.farmer;
    if(!farmer){
      this.navCtrl.navigateRoot(['/capturer']); 
     this.dismissModal();
     this.dismissModal();
     this.dismissModal();
    }
    else{
      //this.fa
    }
  }
}
