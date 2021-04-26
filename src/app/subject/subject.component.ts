import { Component, OnInit } from '@angular/core';
// import { HttpClient } from  "@angular/common/http";
import { ExamsService } from '../exams.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: any;
  
  constructor(private examsService:ExamsService) {
  }

  ngOnInit(): void {
    this.examsService.getAllSubjects().subscribe(subjects=>{
      // console.log(subjects);
      this.subjects = subjects;
    });
  }

  start=0;
  pageSize=3
  
  first(){
    this.start = 0;
  }

  next(){
    if (this.start < this.subjects.length - this.pageSize) {
      this.start += this.pageSize;
    }
  }

  prev(){
    if (this.start > 0) {
      this.start -= this.pageSize;
    }
  }

  last(){
    let sotrang = Math.ceil(this.subjects.length / this.pageSize);
    this.start = (sotrang - 1) * this.pageSize;
  }

}
