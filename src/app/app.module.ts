import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemePickerComponent } from './shared/components/theme-picker/theme-picker.component';

@NgModule({
  declarations: [AppComponent, ThemePickerComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
