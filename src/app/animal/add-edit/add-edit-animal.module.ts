import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditAnimalPageRoutingModule } from './add-edit-animal-routing.module';

import { AddEditAnimalPage } from './add-edit-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditAnimalPageRoutingModule
  ],
  declarations: [AddEditAnimalPage]
})
export class AddEditAnimalPageModule {}
