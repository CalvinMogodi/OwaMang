import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionFarmerPagePageRoutingModule } from './region-farmer-page-routing.module';

import { RegionFarmerPagePage } from './region-farmer-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionFarmerPagePageRoutingModule
  ],
  declarations: [RegionFarmerPagePage]
})
export class RegionFarmerPagePageModule {}
