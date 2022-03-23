import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingLiveStockPagePageRoutingModule } from './pending-live-stock-page-routing.module';

import { PendingLiveStockPagePage } from './pending-live-stock-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingLiveStockPagePageRoutingModule
  ],
  declarations: [PendingLiveStockPagePage]
})
export class PendingLiveStockPagePageModule {}
