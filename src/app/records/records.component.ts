import { Component, OnInit } from '@angular/core';
import { ServicedataService } from "../servicedata.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  private data_array=[];
  public recordsId;
  constructor(private data:ServicedataService,private route:ActivatedRoute) {
    this.getDataFromService();
   }

  ngOnInit() {
    console.log(this.route.snapshot.params['id'],"________+++++________")
    let id=parseInt((this.route.snapshot.params['id']));
    this.recordsId=id;
  }
  getDataFromService(){
    this.data_array=this.data.getjsonData();
  }

  displayfull($event,sum){
    $event.preventDefault();
    console.log(sum)
  }
}
