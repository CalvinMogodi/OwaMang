import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLivestockPage } from './add-livestock.page';

const routes: Routes = [
  {
    path: '',
    component: AddLivestockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLivestockPageRoutingModule {}
