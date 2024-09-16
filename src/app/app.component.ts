import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { DirectiveStructuralComponent } from './component/directive-structural/directive-structural.component';
import { AttributeDirectiveComponent } from './component/attribute-directive/attribute-directive.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatabindingComponent,DirectiveStructuralComponent,AttributeDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'latest-app';
}
