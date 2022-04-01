import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerPagePageRoutingModule } from './farmer-page-routing.module';

import { FarmerPagePage } from './farmer-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerPagePageRoutingModule
  ],
  declarations: [FarmerPagePage]
})
export class FarmerPagePageModule {}
