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
    password:''

  }

  router=inject(Router)
  login()
  {
    console.log("C")
    if(this.userobj.username=="admin" && this.userobj.password=="12345")
    {
      alert("loged In succesful")
      this.router.navigateByUrl('emp-list')
    }
    else{
      alert("wrong credential")
    }
  }

}
