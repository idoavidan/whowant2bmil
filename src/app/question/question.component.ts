import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  private _answers = [String];
  private _questionStr;
  private _correct;
  private _state;
  private _inputAnswer; 

  // @Input() question: any;
  @Input() index;
  @Input()
  set question(question){
    this._answers = [question.correct_answer,...question.incorrect_answers];
    this.shuffle(this._answers);
    this._questionStr = question.question;
    this._correct = question.correct_answer;
    this._state = 0;
  }
  @Output() next: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  private clickNext() {
    this._state = this._state + 1;
    if(this._state === 3){
      this.next.emit(null);
    }
  }
  private isCorrect(_answerNum){
    return {
      'answer': true ,
      wrong : this._state==2&&this._correct!=this._answers[_answerNum]&&this._inputAnswer==_answerNum, 
      right : this._state==2&&this._correct==this._answers[_answerNum]&&this._inputAnswer==_answerNum,
      selected : this._state==1&&this._inputAnswer==_answerNum
    }
  }
  private selectAnswer(_answerNum){
    this._inputAnswer = _answerNum; 
    this._state = 1;
  }
  private shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

}
