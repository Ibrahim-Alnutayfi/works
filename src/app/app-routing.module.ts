import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { YahooApiComponent } from './yahoo-api/yahoo-api.component';
import { CompanyComponent } from './yahoo-api/company/company.component';

import { ConvertMultiFilesComponent } from './convert-multi-files/convert-multi-files.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'yahoo-api', component: YahooApiComponent },
  { path: 'convert-multi-files', component: ConvertMultiFilesComponent },
  { path: 'yahoo-api/company/:symbol', component: CompanyComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [HomePageComponent, YahooApiComponent];
