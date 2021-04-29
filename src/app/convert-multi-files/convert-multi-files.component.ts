import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-convert-multi-files',
  templateUrl: './convert-multi-files.component.html',
  styleUrls: ['./convert-multi-files.component.css']
})
export class ConvertMultiFilesComponent implements OnInit {

  selectedFiles: File[] = [];
  convertedFiles: any[] = [];
  acceptedFileTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
  ];
  errorMsg = '';
  infoMsg = '';
  constructor() {
    
  }
  ngOnInit(): void {
  }
  onFileChanged(event: any) {
    this.errorMsg = '';
    for (let i = 0; i < event.target.files.length; i++) {
      if (this.selectedFiles.length < 15) {
        if (this.acceptedFileTypes.includes(event.target.files[i].type)) {
          this.selectedFiles.push(event.target.files[i])
        } else {
          this.errorMsg = "Unaccepted file type for: " + event.target.files[i].name;
        }
      } else {
        this.errorMsg = "max. files number is 15";
      }
    }
  }
  saveConvertedFiles(file: any) {
    this.convertedFiles.push(file.toString());
    console.log(this.convertedFiles.length);
  }
   covertFile() {
    for (let i = 0; i < this.selectedFiles.length; i++) {
      let reader = new FileReader();
       reader.readAsDataURL(this.selectedFiles[i]);
      reader.onload =  () => {
         this.saveConvertedFiles(reader.result);
      }
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }
  updateSize(size: any) {
    var sOutput = size + " bytes";
    for (var aMultiples = ["K", "M", "G", "T", "P", "E", "Z", "Y"], nMultiple = 0, nApprox = size / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
      sOutput = nApprox.toFixed(1) + aMultiples[nMultiple];
    }

    return sOutput;
  }
  // async copyMessage(val: string) {
  //   var confirmed = confirm('Large file size may take some time to copy. click ok to process');
  //   if (confirmed) {
  //     const selBox = document.createElement('textarea');
  //     selBox.style.position = 'fixed';
  //     selBox.style.left = '0';
  //     selBox.style.top = '0';
  //     selBox.style.opacity = '0';
  //     selBox.value = val;
  //     document.body.appendChild(selBox);
  //     selBox.focus();
  //     selBox.select();
  //     await document.execCommand('copy');
  //     document.body.removeChild(selBox);
  //     this.infoMsg = 'Copied';
  //   }
  // }
}
