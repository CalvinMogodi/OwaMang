import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreedPagePageRoutingModule } from './breed-page-routing.module';

import { BreedPagePage } from './breed-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreedPagePageRoutingModule
  ],
  declarations: [BreedPagePage]
})
export class BreedPagePageModule {}
