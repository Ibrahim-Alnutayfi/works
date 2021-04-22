import { Component, OnInit } from '@angular/core';
import axios from "axios";
@Component({
  selector: 'app-yahoo-api',
  templateUrl: './yahoo-api.component.html',
  styleUrls: ['./yahoo-api.component.css']
})
export class YahooApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   let url = " /v10/finance/quoteSummary/"
                + 2222 + ".SR" +
                "?modules=assetProfile%2CsummaryProfile%2CsummaryDetail%2CesgScores%2Cprice%2CincomeStatementHistory%2CincomeStatementHistoryQuarterly%2CbalanceSheetHistory%2CbalanceSheetHistoryQuarterly%2CcashflowStatementHistory%2CcashflowStatementHistoryQuarterly%2CdefaultKeyStatistics%2CfinancialData%2CcalendarEvents%2CsecFilings%2CrecommendationTrend%2CupgradeDowngradeHistory%2CinstitutionOwnership%2CfundOwnership%2CmajorDirectHolders%2CmajorHoldersBreakdown%2CinsiderTransactions%2CinsiderHolders%2CnetSharePurchaseActivity%2Cearnings%2CearningsHistory%2CearningsTrend%2CindustryTrend%2CindexTrend%2CsectorTrend";
    axios.get(url).then(res => {
      alert(res.data.quoteSummary.result[0].assetProfile.city)
    }).catch(error => {
      console.log(error)
    })
  }

}
