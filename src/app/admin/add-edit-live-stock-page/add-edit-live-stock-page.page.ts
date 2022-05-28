import { Component, Input, OnInit } from '@angular/core';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@awesome-cordova-plugins/file-transfer/ngx';
import { ModalController, NavController, ActionSheetController } from '@ionic/angular';
import { BrandmarksPage } from 'src/app/brandmarks/brandmarks.page';
import { LocationAutocompletePage } from 'src/app/location-autocomplete/location-autocomplete.page';

@Component({
  selector: 'app-add-edit-live-stock-page',
  templateUrl: './add-edit-live-stock-page.page.html',
  styleUrls: ['./add-edit-live-stock-page.page.scss'],
})
export class AddEditLiveStockPagePage implements OnInit {
  public address: any;
  public livestock: any;
  public startdate: string = new Date().toISOString();
  public popoverDate: string = new Date().toISOString();
  public date: Date = new Date();
  public croppedImagePath = "";
  public isLoading = false;
  public breedType: string;
  public color: string;
  public notes: string;
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
  @Input() isAdd: boolean;
  ownerName: string = '';
  ownerSurname: string = '';
  constructor(private modalController: ModalController, private navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    private transfer: FileTransfer) {
    this.address = {
      place: ''
    };
  }

  ngOnInit() {
    if(!this.isAdd){
      this.ownerName = 'John';
      this.ownerSurname = 'Joe';
      this.brandmarks = [ {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#86;</span>'},
      {class: 'west', htmlCode: '&#x2141;', element: '<span class="west">&#x2141;</span>'},
      {class: 'west', htmlCode: '&#66;', element: '<span class="west">&#71;</span>'},
      {class: 'east', htmlCode: '&#66;', element: '<span class="east">&#88;</span>'}]
      this.breedType = '8';
      this.color = '01'
      this.notes = 'notes notesnotes, notesnotes notesnotes notesnotes notesnotes notes. Notes notesnotes notes v notes notes notesnotesv notesnotes notes v notes notes notesnotesv.';
      this.uploads[0].imgUrl = '../../../assets/img/certificate.PNG'
      this.uploads[1].imgUrl = '../../../assets/img/certificate1.PNG'
      this.uploads[2].imgUrl = '../../../assets/img/certificate.PNG'
      this.uploads[3].imgUrl = '../../../assets/img/certificate1.PNG'
    }
   

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
}
