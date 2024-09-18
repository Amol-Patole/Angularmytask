import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

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
