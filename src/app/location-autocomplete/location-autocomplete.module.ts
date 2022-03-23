import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationAutocompletePageRoutingModule } from './location-autocomplete-routing.module';

import { LocationAutocompletePage } from './location-autocomplete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationAutocompletePageRoutingModule
  ],
  declarations: [LocationAutocompletePage]
})
export class LocationAutocompletePageModule {}
