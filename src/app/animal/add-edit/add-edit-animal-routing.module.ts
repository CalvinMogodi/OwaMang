import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditAnimalPage } from './add-edit-animal.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditAnimalPageRoutingModule {}
