import { HttpClient, HttpContext } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userobj:any={
    username:'',
    Password:''

  }
  http=inject(HttpClient)

  router=inject(Router)
  login()
  {
  
    if(this.userobj.username=="admin" && this.userobj.Password=="12345")
    {
      alert("loged In succesful")
      localStorage.setItem('Username',this.userobj.username )
      this.router.navigateByUrl('emp-list')
    }
    else{
      alert("wrong credential")
    }
  }
  // Static Login


  // login()
  // {
  //   this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.userobj).subscribe((res:any)=>
  //   { 
  //     if(res.result)
  //     {
  //       alert("loged In succesful")
  //       localStorage.setItem('Username',this.userobj.username )
  //        this.router.navigateByUrl('emp-list')
  //     }
  //     else{
  //       alert(res.message)
  //     }
  //   })
  // }
}
