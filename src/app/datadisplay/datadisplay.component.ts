import { Component, OnInit } from '@angular/core';
import { ServicedataService } from "../servicedata.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-datadisplay',
  templateUrl: './datadisplay.component.html',
  styleUrls: ['./datadisplay.component.css']
})
export class DatadisplayComponent implements OnInit {
private data_array=[];
  constructor(private data:ServicedataService,private router: Router) {
    this.getDataFromService();
    console.log(this.data_array);
   }

  ngOnInit() {
    
  }
  getDataFromService(){
    this.data_array=this.data.getjsonData();
  }
  // recordphase(idRef){
  //   console.log("________________________________");
  //   this.router.navigate(['/ourteam', idRef]);
  // }
}
