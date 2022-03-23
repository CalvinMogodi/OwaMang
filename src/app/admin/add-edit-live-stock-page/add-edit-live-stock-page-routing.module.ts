import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditLiveStockPagePage } from './add-edit-live-stock-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditLiveStockPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditLiveStockPagePageRoutingModule {}
