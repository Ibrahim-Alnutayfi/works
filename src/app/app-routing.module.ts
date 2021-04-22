import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { YahooApiComponent } from './yahoo-api/yahoo-api.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'yahoo-api', component: YahooApiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [HomePageComponent, YahooApiComponent];
