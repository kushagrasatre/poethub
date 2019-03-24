import { Component, OnInit } from '@angular/core';
import { ServicedataService } from "../servicedata.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

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

}
