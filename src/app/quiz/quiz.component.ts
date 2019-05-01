import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  questions = []
  pages = 9;
  index = 0;
  constructor(private _QuizService: QuizService) { }
  ngOnInit() {
     this._QuizService.getQuestions().subscribe(
      data => { this.questions = data["results"];},
      err => console.error(err)
     );
  }

}
