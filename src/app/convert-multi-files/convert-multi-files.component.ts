import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
@Component({
  selector: 'app-convert-multi-files',
  templateUrl: './convert-multi-files.component.html',
  styleUrls: ['./convert-multi-files.component.css']
})
export class ConvertMultiFilesComponent implements OnInit {

  selectedFiles: File[] = [];
  convertedFiles : any[] = [];
  acceptedFileTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
  ];
  errorMsg = '';
  constructor() { }

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
  covertFile() {
    for (let i = 0; i < this.selectedFiles.length; i++) {
      console.log(this.convertedFiles.length)
      var ImageBaseData1: any = '';
      let reader = new FileReader();
      reader.readAsDataURL(this.selectedFiles[i]);
      reader.onload =  () => {
        console.log(reader.result)
        ImageBaseData1 = reader.result;
      };
      reader.onloadend = () => {
        this.convertedFiles.push(ImageBaseData1);
      }
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }
}
