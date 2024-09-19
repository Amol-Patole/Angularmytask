import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../service/department.service';
import { AlertComponent } from "../resuable/alert/alert.component";
import { ButtonComponent } from '../resuable/button/button.component';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, AlertComponent,ButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit{

 getobj:any=
  {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  };
  ngOnInit(): void {
      this.getdepartment()
  }

  onedit(data:any)
  { 
    this.getobj=data;
  }

  http=inject(HttpClient)

  userlist:any[]=[];

  constructor(private deptsrv:DepartmentService)
  {

  }
  
  // onsave()
  // {
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.getobj).subscribe((res:any)=> 
  //   {
  //     if(res.result)
  //     {
  //       console.log(res.result)
  //       alert("Succesfull Saved" )
  //       this.getdepartment()
  //     }
  //     else
  //     {
  //       alert(res.message)
  //     }
  //   })
  // }

  // ondelete(id:number)
  // {
  //   const isdelete = confirm("Are you sure you want to delete")
  //   if(isdelete)
  //   {
  //   this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +id).subscribe((res:any)=> 
  //     {
  //       if(res.result)
  //       {
  //         console.log(res.result)
  //         alert("Succesfull Deleted")
  //         // this.getdetail()
  //       }
  //       else
  //       {
  //         alert(res.message)
  //       }
  //     })
  //   }
  // }

  ondelete(id:number)
  {
    this.deptsrv.deletedetail(id).subscribe((res:any)=>
    {
      if(res.result)
              {
                console.log(res)
                alert("Succesfull Deleted")
                // this.getdetail()
              }
              else
              {
                alert(res.message)
              } 
    })
  }

  onupdate()
  {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.getobj).subscribe((res:any)=> 
      {
        if(!res.result)
        {
          console.log(res.result)
          alert("Succesfull Updated")
          // this.getdetail()
        }
        else
        {
          alert(res.message)
        }
      })
  }

  // getdetail()
  // {
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=> {
  //     this.userlist=res.data;
  //   })
  // }

getdepartment()
{
this.deptsrv.getdetail().subscribe((res:any)=>
{
  this.userlist=res.data;
})


}

onsave()
{
  this.deptsrv.savedetails(this.getobj).subscribe((res:any)=>
  {

    if(res.result)
        {
          console.log(res.result)
          alert("Succesfull Saved" )
          this.getdepartment()
        }
        else
        {
          alert(res.message)
        }

  })
}
 




}
