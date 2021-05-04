import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YahooApiComponent } from './yahoo-api/yahoo-api.component';
import { ConvertMultiFilesComponent } from './convert-multi-files/convert-multi-files.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ConvertMultiFilesComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [YahooApiComponent, FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
