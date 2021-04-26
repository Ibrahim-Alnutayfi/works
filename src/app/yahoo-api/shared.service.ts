import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  company: any;
  constructor() {}

  setCompany(company: any) {
    this.company = company;
    // console.log('ffffffffffffffffff : ' + this.companiesList);
  }
  getCompany() {
    // console.log('ggggggggggggggggggggg' + this.companiesList);

    return this.company;
  }
}
