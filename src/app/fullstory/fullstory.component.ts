import { Component, OnInit } from '@angular/core';
import { ServicedataService } from "../servicedata.service";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-fullstory',
  templateUrl: './fullstory.component.html',
  styleUrls: ['./fullstory.component.css']
})
export class FullstoryComponent implements OnInit {
  private data_array=[];
  private recordsId;
  private memberId;
  private mediaclass;
  private videobool;
  private audiobool;
  private valuevar="B";
  private mediaurl;
  constructor(private data:ServicedataService,private route:ActivatedRoute, public sanitizer: DomSanitizer) {   
    this.getDataFromService(); 
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['ch_id'],"________++h+++________")
    
    let id=parseInt((this.route.snapshot.params['ch_id']));
    let mid=parseInt((this.route.snapshot.params['id']));
    this.recordsId=id;
    this.memberId=mid;
    this.mediaclass=this.data_array[this.memberId-1].details[this.recordsId-1].mode;
    this.videobool= this.mediaclass=="video"?true:false;
    this.audiobool= this.mediaclass=="audio"?true:false;
    this.mediaurl=this.data_array[this.memberId-1].details[this.recordsId-1].media.source[0];
    this.mediaurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.mediaurl);
  }
  getDataFromService(){
    this.data_array=this.data.getjsonData();
  }

}
