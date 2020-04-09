import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const COMPONENTS = [MatGridListModule, MatIconModule, MatMenuModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...COMPONENTS],
  exports: [...COMPONENTS],
})
export class MaterialModule {}
