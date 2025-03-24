import { Routes } from '@angular/router';
import { NewUserComponent } from './Component/new-user/new-user.component';
import { SurveyBoxComponent } from './Component/survey-box/survey-box.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'Survey',
        pathMatch:'full'

    },
    {
        path:'AddNewUser',
        component:NewUserComponent
    },
    {
        path:'Survey',
        component:SurveyBoxComponent
    }
];
