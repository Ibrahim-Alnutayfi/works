import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-image-to-base64',
  templateUrl: './image-to-base64.component.html',
  styleUrls: ['./image-to-base64.component.css']
})
export class ImageToBase64Component implements OnInit {

  ImageBaseData = '';
  ImageBaseDataLength = 0;
  isCopied = false;
  constructor() { }

  ngOnInit(): void {
  }
  onFileChanged(event: any) {
    this.ImageBaseData = '';
    this.ImageBaseDataLength = 0;
    this.isCopied = false;
    var ImageBaseData1: any = '';
    const file = event.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      ImageBaseData1 = reader.result;
    };
    reader.onloadend = () => {
      this.ImageBaseData = ImageBaseData1;
      this.ImageBaseDataLength = this.ImageBaseData.length;
    }
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  copyMessage() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.ImageBaseData;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.isCopied = true;
  }


}
