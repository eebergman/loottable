import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from 'src/app/modules/material/material.module';
import { StyleManagerService } from './style-manager/style-manager.service';
import { ThemePickerComponent } from './theme-picker.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [ThemePickerComponent],
  declarations: [ThemePickerComponent],
  providers: [StyleManagerService],
})
export class ThemePickerModule {}
