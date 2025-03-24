import { Component, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Questions } from '../../Model/questions.model';
import { SurveyService } from '../../Service/survey.service';

@Component({
  selector: 'app-survey-box',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './survey-box.component.html',
  styleUrl: './survey-box.component.scss'
})
export class SurveyBoxComponent 
{
  public questions = signal<Questions[] | undefined>(undefined)

  private surveyService = inject(SurveyService);

  ngOnInit()
  {
    this.surveyService.surveys().subscribe({
      next:(value) =>
      {
        this.questions.set(value);
      }
    })
  }

  get Questions()
  {
    if(this.questions)
    {
      return this.questions;
    }
    return null;
  }
}
