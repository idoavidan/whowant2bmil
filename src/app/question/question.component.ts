import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  // private _questionObject: Object;
  @Input() question: any;
  // @Input() correct_answer: String;
  // @Input() incorrect_answers: [String];
  // @Input() index : Number;
  // @Input() set questionObject(questionObject : Object){
  //   this._questionObject.question = 
  // }
  @Output() next: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  clickNext() {
      this.next.emit(null);
  }


}
