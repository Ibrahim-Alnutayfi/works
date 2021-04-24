import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-image-to-base64',
  templateUrl: './image-to-base64.component.html',
  styleUrls: ['./image-to-base64.component.css']
})
export class ImageToBase64Component implements OnInit {
  
   ImageBaseData = '';
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
    }
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  

}
