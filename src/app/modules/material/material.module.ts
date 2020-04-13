import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

const COMPONENTS = [
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...COMPONENTS],
  exports: [...COMPONENTS],
})
export class MaterialModule {}
