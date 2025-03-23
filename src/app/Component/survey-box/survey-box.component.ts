import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Questions } from '../../Model/questions.model';

@Component({
  selector: 'app-survey-box',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './survey-box.component.html',
  styleUrl: './survey-box.component.scss'
})
export class SurveyBoxComponent 
{
  public questions = input.required<Questions[] | undefined>();

  get Questions()
  {
    if(this.questions)
    {
      return this.questions;
    }
    return null;
  }
}
