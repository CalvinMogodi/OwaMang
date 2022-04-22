import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerSearchPageRoutingModule } from './search-routing.module';

import { FarmerSearchPage } from './search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerSearchPageRoutingModule
  ],
  declarations: [FarmerSearchPage]
})
export class DashboardPageModule {}
