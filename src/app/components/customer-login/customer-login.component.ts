import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  user = {
    username: "",
    password: "",

  
  };
  admin={
    adminusername: "",
    adminpassword: "",
  }
  loginSuccess = false; 
  loginError = false; 
  
  loginSuccess1 = false; 
  loginError1 = false; 

  constructor(private userService: UserService,private route:Router,private adminService:AdminService) {}

  onSubmit() {
    this.userService.loginUser(this.user)
      .subscribe(
        response => {
        console.log('User logged in successfully', response);
     
        this.loginSuccess = true;
        setTimeout(() => {
          this.route.navigate(['./Home']) 
        }, 2000);
       
        },
        error => {
          console.error('Error logging in user', error);
          this.loginError = true;
        }
      );
  }
  
  onClick(){
    this.route.navigate(['./Register'])
  }


  onSubmit1() {
    if(this.admin.adminusername=="admin" && this.admin.adminpassword=="admin"){
    this.route.navigate(['./Admin']) 
    // this.adminService.loginAdmin(this.admin)
    //   .subscribe(
    //     response => {
    //     console.log('User logged in successfully', response);
     
    //     this.loginSuccess1 = true;
    //     setInterval(() => {
    //       this.route.navigate(['./Admin']) 
    //     }, 13000);
       
    //     }
    //   );
  }
  else{
    this.loginError1 = true;
  }
}
}





