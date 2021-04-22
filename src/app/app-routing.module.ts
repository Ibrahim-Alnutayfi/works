import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YahooApiComponent } from './yahoo-api/yahoo-api.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CompanyComponent } from './home-page/company/company.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'yahoo-api', component: YahooApiComponent },
  { path: 'company/:code', component: CompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [HomePageComponent, YahooApiComponent];
