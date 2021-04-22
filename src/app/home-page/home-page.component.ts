import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  routerList = [
    {
      routeURL: 'yahoo-api',
      routeName: 'Yahoo Finance Api ',
      routeDesc: 'bla bla bla',
    },
    {
      routeURL: '',
      routeName: 'Project 2',
      routeDesc: 'bla bla bla',
    },
    {
      routeURL: '',
      routeName: 'Project 3',
      routeDesc: 'bla bla bla',
    }
  ];
}
