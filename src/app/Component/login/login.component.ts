import { Component, inject, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginServiceService } from '../../Service/login-service.service';
import { User } from '../../Model/user.model';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent
{
  private readonly loginService = inject(LoginServiceService)

  isAnUser = signal<User | undefined>(undefined);
  isUser = output<User>();
  form = new FormGroup({
        email: new FormControl('',{
          validators:[
            Validators.email,
            Validators.required
          ]
        }),
        password: new FormControl('',{
          validators:[
            Validators.required,
            Validators.minLength(8)
          ]
        })
  });

  onSubmit() {
    const email = this.form.controls.email.value ?? '';  
    const password = this.form.controls.password.value ?? ''; 
    
    this.loginService.Login(email, password);
    this.loginService.login().subscribe({
      next:(val) => {
        if(val)
        {
          this.isAnUser.set(val);
          this.isUser.emit(val);
        }
      }
    })
  }
}
