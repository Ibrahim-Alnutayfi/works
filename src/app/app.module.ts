import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YahooApiComponent } from './yahoo-api/yahoo-api.component';
import { ConvertMultiFilesComponent } from './convert-multi-files/convert-multi-files.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [AppComponent, routingComponents, ConvertMultiFilesComponent,RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [YahooApiComponent,
  FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
