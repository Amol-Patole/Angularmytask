import { AsyncPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe, } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NaPipe } from './custompipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,AsyncPipe,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstname:string='amol'

  currentTime : Observable<Date> = new Observable<Date>;

student: any=
{
name:'angular',
age:20,
state:''

};
  constructor()
  {
    this.currentTime=interval(1000).pipe(map(() => new Date()));
  }

}
