import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  isdivbgcolor:string='bg-primary';

  isred()
  {
    this.isdivbgcolor='bg-danger'
  }

  isblue()
  {
    this.isdivbgcolor='bg-primary'
  }

}
