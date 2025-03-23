import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { SurveyBoxComponent } from './Component/survey-box/survey-box.component';
import { User } from './Model/user.model';
import { SurveyService } from './Service/survey.service';
import { Questions } from './Model/questions.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,SurveyBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Survey';
  _isUser = signal<User | undefined>(undefined);
  surveyQuestions = signal<Questions[] | undefined>(undefined);

  constructor(private readonly surveyService : SurveyService){}

  isAnUser(isUser:User)
  {
    this._isUser.set(isUser);
    this.surveyService.setSchoolclass(isUser.schoolclass);

    this.surveyService.surveys().subscribe({
      next: (questions) => {
        this.surveyQuestions.set(questions);
      },
      error: (error) => {
        console.error('Failed to load survey questions:', error);
      },
    });
  }
}
