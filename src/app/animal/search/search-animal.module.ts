import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchAnimalPageRoutingModule } from './search-animal-routing.module';

import { SearchAnimalPage } from './search-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchAnimalPageRoutingModule
  ],
  declarations: [SearchAnimalPage]
})
export class SearchAnimalPageModule {}
