import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { YahooApiComponent } from '../yahoo-api.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent {
  symbol: any;
  company: any;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private YahooApi: YahooApiComponent,
    private shared: SharedService
  ) {}

  async ngOnInit() {
    this.symbol = this.activatedRoute.snapshot.params.symbol;
    this.company = await this.shared.getCompany();

    console.log(this.company);
  }
}
export class Company {
  public symbol: string;
  public name: string;
  public industry: string;
  public Desc: string;
  public currentPrice: string;
  public change: string;
  public netChange: string;

  constructor(
    symbol: string,
    name: string,
    industry: string,
    Desc: string,
    currentPrice: string,
    change: string,
    netChange: string
  ) {
    this.symbol = symbol;
    this.name = name;
    this.industry = industry;
    this.Desc = Desc;
    this.currentPrice = currentPrice;
    this.change = change;
    this.netChange = netChange;
  }
}
