import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class QuizService {
  constructor(private _http: HttpClient) { }
  getQuestions() {
    return this._http.get('https://opentdb.com/api.php?amount=10&type=multiple');
  }
}