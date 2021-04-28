import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExcelServicesService } from '../services/excel-services.service';
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
  constructor(private excelService: ExcelServicesService) {
    this.excelService.exportAsExcelFile(this.acceptedFileTypes, 'acceptedFileTypes');
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
  saveConvertedFiles(file : any){
    this.convertedFiles.push(file.toString());
    console.log(this.convertedFiles.length);
  }
  covertFile() {
    for (let i = 0; i < this.selectedFiles.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(this.selectedFiles[i]);
      reader.onload = async () => {
        await this.saveConvertedFiles(reader.result);
      }
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }
}
