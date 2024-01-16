import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {
  user = {
    id:"",
    username: "",
    email: "",
    phone:"",
    password: ""
  };
  RegisterSuccess = false; 
  RegisterError = false;   
  constructor(private userService: UserService,private route:Router) {}

  onSubmit() {
    this.userService.registerUser(this.user)
      .subscribe(
        response => {
          console.log('User registered successfully', response);
          this.RegisterSuccess = true;
          setTimeout(() => {
            this.route.navigate(['./Home']) 
          }, 2000);
      
        },
        error => {
          console.error('Error registering user', error);
          setTimeout(() => {
            this.RegisterError = true;
          }, 2000)
      
        }
      );
      
   }
   

  

}




