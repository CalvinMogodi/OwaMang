import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLivestockPageRoutingModule } from './add-livestock-routing.module';

import { AddLivestockPage } from './add-livestock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLivestockPageRoutingModule
  ],
  declarations: [AddLivestockPage]
})
export class AddLivestockPageModule {}
