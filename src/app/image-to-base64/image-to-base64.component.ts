import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-image-to-base64',
  templateUrl: './image-to-base64.component.html',
  styleUrls: ['./image-to-base64.component.css']
})
export class ImageToBase64Component implements OnInit {
  
   ImageBaseData = '';
   ImageBaseDataLength = 0;
  constructor() { }

  ngOnInit(): void {

  }
  onFileChanged(event : any) {
    var ImageBaseData1 : any = '';
    const file = event.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      ImageBaseData1 = reader.result;
    };
    reader.onloadend = () =>{
      this.ImageBaseData = ImageBaseData1;
      this.ImageBaseDataLength = this.ImageBaseData.length;
    }
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  

}
