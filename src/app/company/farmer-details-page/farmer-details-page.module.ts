import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerDetailsPagePageRoutingModule } from './farmer-details-page-routing.module';

import { FarmerDetailsPagePage } from './farmer-details-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerDetailsPagePageRoutingModule
  ],
  declarations: [FarmerDetailsPagePage]
})
export class FarmerDetailsPagePageModule {}
