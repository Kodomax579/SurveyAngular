import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  imports: [NgIf],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss'
})
export class NewUserComponent {

    form = new FormGroup({
      firstname: new FormControl('',{validators:[Validators.required]}),
      lastname: new FormControl('',{validators:[Validators.required]}),
      email: new FormControl('',{validators:[Validators.required,Validators.email]}),
      password: new FormControl('',{validators:[Validators.required]})
    });

  // Diese Methode wird aufgerufen, wenn das Formular abgeschickt wird
  onSubmit() {
    if (this.form.valid) {
      console.log('Form Data: ', this.form.value);
      // Hier kannst du deine Logik hinzufügen, um die Formulardaten zu verarbeiten
    } else {
      console.log('Form is invalid');
    }
  }

}
