import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditLiveStockPagePageRoutingModule } from './add-edit-live-stock-page-routing.module';

import { AddEditLiveStockPagePage } from './add-edit-live-stock-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditLiveStockPagePageRoutingModule
  ],
  declarations: [AddEditLiveStockPagePage]
})
export class AddEditLiveStockPagePageModule {}
