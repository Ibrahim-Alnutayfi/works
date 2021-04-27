import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YahooApiComponent } from './yahoo-api/yahoo-api.component';
import { ConvertMultiFilesComponent } from './convert-multi-files/convert-multi-files.component';
@NgModule({
  declarations: [AppComponent, routingComponents, ConvertMultiFilesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [YahooApiComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
