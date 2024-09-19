import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {


  constructor(private http:HttpClient) { }

  getdetail()
  {
    return this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment");
  }

  savedetails(obj:any)
  {
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",obj)
  }

  deletedetail(id: number) {
    return this.http.delete(`https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=`+id);
  }
  
  
}
