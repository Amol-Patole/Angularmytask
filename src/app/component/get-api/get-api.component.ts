import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AlertComponent } from "../../resuable/alert/alert.component";

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule, AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})

export class GetApiComponent {

  // http = inject(HttpClient)   -- Using injection
  constructor(private http:HttpClient)
  {

  }
  userlist:any[]=[];
  customer:any[]=[];

  getalluser()
  {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>
    {
      this.userlist=result ;
    })
  }

  getallcustomer()
  {
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((result:any)=>
    {
      this.customer=result.data;
    })
  }

}
