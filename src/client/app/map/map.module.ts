import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from './map.component';
import { NameListService } from '../shared/name-list/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [MapComponent],
  exports: [MapComponent],
  providers: [NameListService]
})
export class MapModule { }
