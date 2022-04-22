import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmerSearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: FarmerSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerSearchPageRoutingModule {}
