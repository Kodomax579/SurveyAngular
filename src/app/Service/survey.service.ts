import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Questions } from '../Model/questions.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  _schoolClass = signal("");
  constructor(private readonly httpClient: HttpClient) { }

  surveys(): Observable<Questions[]> {
    const schoolClass = this._schoolClass();
    const url = `https://localhost:7156/Question/questions/${schoolClass}`;

    return this.httpClient.get<Questions[]>(url);
  }
  setSchoolclass(schoolClass:string)
  {
    this._schoolClass.set(schoolClass);
  }
}
