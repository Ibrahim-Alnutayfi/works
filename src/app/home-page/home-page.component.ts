import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  routerList = [
    { routeURL: 'yahoo-api', routeName: 'Yahoo Finance Api ', routeDesc: 'bla bla bla' },
    { routeURL: '', routeName: '2', routeDesc: 'bla bla bla' },
    { routeURL: '', routeName: '3', routeDesc: 'bla bla bla' },
    { routeURL: '', routeName: '4', routeDesc: 'bla bla bla' },
    { routeURL: '', routeName: '5', routeDesc: 'bla bla bla' },
    { routeURL: '', routeName: '6', routeDesc: 'bla bla bla' },
  ];
  constructor() {

  }

  ngOnInit(): void {
  }

}
