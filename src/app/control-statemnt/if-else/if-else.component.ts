import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  iddivvisible:boolean=true;

iswarningvisible:boolean=true;


hide()
{
  this.iddivvisible=false
}
show()
{
  this.iddivvisible=true
}

toogle()
{
  this.iswarningvisible = !this.iswarningvisible
}

}
