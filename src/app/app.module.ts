import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { MaterialModule } from './modules/material/material.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ThemePickerComponent } from './shared/components/theme-picker/theme-picker.component';
import { PageComponent } from './shared/components/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemePickerComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
