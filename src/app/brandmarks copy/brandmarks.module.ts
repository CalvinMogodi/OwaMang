import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandmarksPageRoutingModule } from './brandmarks-routing.module';

import { BrandmarksPage } from './brandmarks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandmarksPageRoutingModule
  ],
  declarations: [BrandmarksPage]
})
export class BrandmarksPageModule {}
