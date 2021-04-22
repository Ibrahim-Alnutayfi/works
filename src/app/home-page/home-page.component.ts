import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  routerList = [
    {routeURL : 'yahoo-api' , routeName : 'Yahoo Finance Api '},
    {routeURL : '' , routeName : '2'},
    {routeURL : '' , routeName : '3'},
    {routeURL : '' , routeName : '4'},
    {routeURL : '' , routeName : '5'},
    {routeURL : '' , routeName : '6'},
  ];
  constructor() {
      
   }

  ngOnInit(): void {
  }

}
