import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashbordPagePageRoutingModule } from './dashbord-page-routing.module';

import { DashbordPagePage } from './dashbord-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashbordPagePageRoutingModule
  ],
  declarations: [DashbordPagePage]
})
export class DashbordPagePageModule {}
