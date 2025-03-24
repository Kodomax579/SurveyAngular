import { Component, signal } from '@angular/core';
import { LoginComponent } from './Component/login/login.component';
import { SurveyBoxComponent } from './Component/survey-box/survey-box.component';
import { User } from './Model/user.model';
import { SurveyService } from './Service/survey.service';
import { Questions } from './Model/questions.model';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [LoginComponent,RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Survey';
  _isUser = signal<User | undefined>(undefined);

  constructor(private readonly surveyService : SurveyService){}

  isAnUser(isUser:User)
  {
    this._isUser.set(isUser);
    console.log(this._isUser())
    this.surveyService.setSchoolclass(isUser.schoolclass);
  }

  
}