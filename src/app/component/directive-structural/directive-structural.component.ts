import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-structural',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directive-structural.component.html',
  styleUrl: './directive-structural.component.css'
})
export class DirectiveStructuralComponent {

  isvisible:boolean=true
  isvisible2:boolean=true
  
  num1:string=""
  num2:string=""

  isselected:string=""

  cityArray:string[]= ['Pune','Mumbai','Thane','Kalyan','Dombivali']

  stud:any[]=[
    {stud1:1 , name:'Amol', city:'pune', isActive:false},
    {stud1:2 , name:'Sahil', city:'mumbai', isActive:false},
    {stud1:3 , name:'Karan', city:'kalyan', isActive:false},
    {stud1:4 , name:'Rohan', city:'thane', isActive:true},
    {stud1:5 , name:'Prahshit', city:'bombay', isActive:false}
    
  ]

  isshow()
  {
    this.isvisible = true
  }

  ishide()
  {
    this.isvisible=false
  }

  istoogle()
  {
    // this.isvisible= !this.isvisible;Short Code 
    if(this.isvisible2 === true)
    {
      this.isvisible2=false
    }
    else
    {
      this.isvisible2=true
    }
  }

}
