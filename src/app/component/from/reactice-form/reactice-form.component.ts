import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-reactice-form',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactice-form.component.html',
  styleUrl: './reactice-form.component.css'
})
export class ReacticeFormComponent {
  studentform:FormGroup = new FormGroup(
    {
      firstname: new FormControl("",[Validators.required,Validators.minLength(3)]),
      lastname: new FormControl(""),
      email: new FormControl("someone@123",[Validators.email]),
      city: new FormControl(""),
      zip: new FormControl(""),
      state: new FormControl("")

    }
  )

  savedata:any;
letssubmit()
{
 this.savedata= this.studentform.value 
}
letreset()
{
 this.studentform.reset();
}

}
