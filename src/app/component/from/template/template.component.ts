import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
 
studentobj :any=
{
  firstname: '',
  lastname:'',
  username:'',
  city:'',
  state:''
}

datasaveoobj:any={}
onsubmit()
{
 this.datasaveoobj=this.studentobj
}
onreset()
{
  this.studentobj=
  {
    firstname: '',
    lastname:'',
    username:'',
    city:'',
    state:''
  }
}
}
