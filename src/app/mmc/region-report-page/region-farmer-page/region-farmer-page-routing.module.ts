import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionFarmerPagePage } from './region-farmer-page.page';

const routes: Routes = [
  {
    path: '',
    component: RegionFarmerPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionFarmerPagePageRoutingModule {}
