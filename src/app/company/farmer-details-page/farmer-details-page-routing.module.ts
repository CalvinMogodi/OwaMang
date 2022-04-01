import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmerDetailsPagePage } from './farmer-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: FarmerDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerDetailsPagePageRoutingModule {}
