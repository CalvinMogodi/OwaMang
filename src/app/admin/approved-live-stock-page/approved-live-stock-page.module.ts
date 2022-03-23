import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovedLiveStockPagePageRoutingModule } from './approved-live-stock-page-routing.module';

import { ApprovedLiveStockPagePage } from './approved-live-stock-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovedLiveStockPagePageRoutingModule
  ],
  declarations: [ApprovedLiveStockPagePage]
})
export class ApprovedLiveStockPagePageModule {}
