import { Component, OnInit } from '@angular/core';
import { HttpClient } from  "@angular/common/http";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  subjects: any;
  p=0;
  title=null;
  constructor(private  httpClient:HttpClient) {
    this.httpClient.get('../../assets/db/Subjects.js').subscribe((subjects)=>{
            console.log(subjects);
            this.subjects = subjects;
          });
  }

  ngOnInit(): void {
  }

  // next() {
  //   this.p=this.p+4;
  // }

  // prev() {
  //   this.p=this.p-4;
  // }

}
