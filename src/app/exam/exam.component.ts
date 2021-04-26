import { Component, OnInit } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  tests: any;
  subjects:any;
  current:any;
  answers:any;
  answer:any;
  start = 0;
  timer:any;
  point=null;
  listAnswer=[];
  constructor(private  httpClient:HttpClient,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;

    this.getAllTests(id).subscribe(data =>{
      this.tests = data;
      this.current = this.tests[0];
    });

    let thisMoment = new Date();
    setInterval(() => {         
      this.timer = new Date(new Date().getTime() - thisMoment.getTime()); 
    }, 1000);  

  }

  getAllTests(id) {
    return this.httpClient.get(`assets/db/Quizs/${id}.js`);
  }

  getNameSubject(id) {
    
  }

  next(){
    if (this.start < this.tests.length - 1) {
      this.start += 1;
      this.listAnswer.push(this.answer);
      
    }
  }

  prev(){
    if (this.start > 0) {
      this.start -= 1;
    }
  }

  countPoint(){
    this.listAnswer.push(this.answer);
    this.tests.forEach(element => {
        this.listAnswer.forEach(e => {
          if (e == element.AnswerId) {
            this.point++;
          }
        });
    });
    // this.router.navigate(['/subject']);
    alert("Hoàn thành bài kiểm tra. Bạn được " + this.point + " điểm");
  }
}
