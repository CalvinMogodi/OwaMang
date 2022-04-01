import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmerPagePage } from './farmer-page.page';

const routes: Routes = [
  {
    path: '',
    component: FarmerPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerPagePageRoutingModule {}
