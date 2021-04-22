import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  companyCode = '';
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.companyCode = this.activatedRoute.snapshot.params.code;
  }
}
