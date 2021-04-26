import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { NgForm } from '@angular/forms';
import { Company } from './company/company.component';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-yahoo-api',
  templateUrl: './yahoo-api.component.html',
  styleUrls: ['./yahoo-api.component.css'],
})
export class YahooApiComponent implements OnInit {
  company = new Company('', '', '', '', '', '', '');
  companiesList = Array<Company>();

  get companies() {
    return this.companiesList;
  }
  _URL_FIRST_PART = ' /v10/finance/quoteSummary/';
  _URL_SECOND_PART =
    '.SR?modules=assetProfile%2CsummaryProfile%2CsummaryDetail%2CesgScores%2Cprice%2CincomeStatementHistory%2CincomeStatementHistoryQuarterly%2CbalanceSheetHistory%2CbalanceSheetHistoryQuarterly%2CcashflowStatementHistory%2CcashflowStatementHistoryQuarterly%2CdefaultKeyStatistics%2CfinancialData%2CcalendarEvents%2CsecFilings%2CrecommendationTrend%2CupgradeDowngradeHistory%2CinstitutionOwnership%2CfundOwnership%2CmajorDirectHolders%2CmajorHoldersBreakdown%2CinsiderTransactions%2CinsiderHolders%2CnetSharePurchaseActivity%2Cearnings%2CearningsHistory%2CearningsTrend%2CindustryTrend%2CindexTrend%2CsectorTrend';

  constructor(private router: Router, private shared: SharedService) {}

  onSubmit(f: NgForm) {}

  redirectToCompany(company: any) {
    this.shared.setCompany(this.company);
    this.router.navigate(['/yahoo-api/company/', company.symbol]);
  }

  ngOnInit() {
    this.companiesSymbol.forEach((companyData) => {
      axios
        .get(this._URL_FIRST_PART + companyData + this._URL_SECOND_PART)
        .then((res) => {
          let data = res.data.quoteSummary.result[0];
          this.company = {
            symbol: data.price.symbol,
            name: data.price.shortName,
            industry: data.summaryProfile.industry,
            Desc: data.assetProfile.longBusinessSummary,
            currentPrice: data.financialData.currentPrice.raw,
            change: data.price.regularMarketChangePercent.fmt,
            netChange: data.price.regularMarketChange.fmt,
          };
          this.companiesList.push(this.company);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
  companiesSymbol = [
    '1010',
    '1020',
    '1030',
    '1050',
    '1060',
    '1080',
    '1090',
    '1120',
    '1140',
    '1150',
    '1180',
    '1201',
    '1202',
    '1210',
    '1211',
    '1212',
    '1213',
    '1214',
    '1301',
    '1302',
    '1303',
    '1320',
    '1330',
    '1810',
    '1810',
    '1820',
    '2001',
    '2002',
    '2010',
    '2020',
    '2030',
    '2040',
    '2050',
    '2060',
    '2070',
    '2080',
    '2090',
    '2100',
    '2110',
    '2120',
    '2130',
    '2140',
    '2150',
    '2160',
    '2170',
    '2180',
    '2190',
    '2200',
    '2210',
    '2220',
    '2230',
    '2240',
    '2250',
    '2270',
    '2280',
    '2290',
    '2300',
    '2310',
    '2320',
    '2330',
    '2340',
    '2350',
    '2360',
    '2370',
    '2380',
    '3001',
    '3002',
    '3003',
    '3005',
    '3010',
    '3020',
    '3030',
    '3040',
    '3050',
    '3060',
    '3080',
    '3090',
    '3091',
    '4001',
    '4002',
    '4003',
    '4004',
    '4005',
    '4006',
    '4007',
    '4008',
    '4009',
    '4010',
    '4020',
    '4030',
    '4031',
    '4040',
    '4050',
    '4061',
    '4070',
    '4080',
    '4090',
    '4100',
    '4110',
    '4130',
    '4140',
    '4150',
    '4160',
    '4170',
    '4180',
    '4190',
    '4200',
    '4210',
    '4220',
    '4230',
    '4240',
    '4250',
    '4260',
    '4270',
    '4280',
    '4290',
    '5110',
    '6001',
    '6002',
    '6010',
    '6020',
    '6040',
    '6050',
    '6060',
    '6070',
    '6090',
    '7010',
    '7020',
    '7030',
    '7040',
    '8010',
    '8012',
    '8020',
    '8030',
    '8040',
    '8050',
    '8060',
    '8070',
    '8080',
    '8100',
    '8110',
    '8120',
    '8130',
    '8150',
    '8160',
    '8170',
    '8180',
    '8190',
    '8200',
    '8210',
    '8230',
    '8240',
    '8250',
    '8260',
    '8270',
    '8280',
    '8290',
    '8300',
    '8310',
    '8311',
    '8312',
  ];
}
