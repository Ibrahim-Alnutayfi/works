import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { YahooApiComponent } from './yahoo-api/yahoo-api.component';
<<<<<<< Updated upstream
import { ImageToBase64Component } from './image-to-base64/image-to-base64.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'yahoo-api', component: YahooApiComponent },
  { path: 'image-to-base-64', component: ImageToBase64Component }
import { CompanyComponent } from './yahoo-api/company/company.component';
  { path: 'yahoo-api/company/:symbol', component: CompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [HomePageComponent, YahooApiComponent , ImageToBase64Component];
