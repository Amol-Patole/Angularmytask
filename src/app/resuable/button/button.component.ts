import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() btntext:string=''
  @Input() btnclass:string=''
  @Output() btnclick = new EventEmitter<any>();

  onclick()
  {
 this.btnclick.emit()
  }
}
