import { Component , ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-vc',
  standalone: true,
  imports: [],
  templateUrl: './vc.component.html',
  styleUrl: './vc.component.css'
})
export class VcComponent implements AfterViewInit {

@ViewChild ('txt') textbox?:ElementRef;

ngAfterViewInit(): void {
    const value = this.textbox?.nativeElement.value;
}
}
