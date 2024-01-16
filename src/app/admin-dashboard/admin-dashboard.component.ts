import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { User } from '../common/user';
import { UserService } from '../service/user.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  products: Product[] = [];
  customer: User[] = [];
  userForm: any;
  productForm: any;
  constructor(
    private productService: ProductService,
    private route: Router,
    private userService: UserService,
    public fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      id: ['',],
      name: [''],
      description: [''],
      price: [''],
      category: [''],
      quantity: [''],
      images: [''],
    });

    this.userForm = this.fb.group({
      id:[''],
      username: [''],
      email: [''],
      phone: [''],
      password: [''],
    });
  }
  ngOnInit(): void {
    this.GetAllProduct();
    this.GetAllUser();
  }

  addto() {
    console.log('i am clicked!!');
    this.route.navigate(['./Admin-addTo']);
  }

  SubmitForm() {
    console.log(this.productForm.value);
    var type = this.productForm.value.id == null ? 'Add' : 'Update';
    this.productService
      .postProduct(this.productForm.value)
      .subscribe((data) => {
        if (type == 'Add') {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:
              'Product (' +
              this.productForm.value.name +
              ') saved Successfully',
          });
        } else {
          Swal.fire({
            icon: 'success',
            title:
              'Product (' +
              this.productForm.value.name +
              ') Updated Successfully',
          });
        }
        this.productForm.reset();
        this.GetAllProduct();
      });
  }
  GetAllProduct() {
    this.productService.getProductList().subscribe((data: any) => {
      this.products = data;
    });
  }

  DeleteConfirmation(ID: any) {
    Swal.fire({
      icon: 'warning',
      title: 'Do you want to Delete this Product ?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        this.DeleteProductByID(ID);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
    this.userService.getUserList().subscribe((data: any) => {
      this.customer = data;
    });
  }

  DeleteProductByID(ID: any) {
    this.productService.deleteProductByID(ID).subscribe((data: any) => {
      Swal.fire('Deleted!', '', 'success');
      this.GetAllProduct();
    });
  }
  GetProductByID(ID: any) {
    this.productService.getProductByID(ID).subscribe((data: any) => {
      console.log('product Details', data);
      setTimeout(() => {
        $('#home-tab').click();
      }, 100);
      this.productForm.patchValue({
        id: data.id,
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        quantity: data.quantity,
        images: data.images,
      });
    });
  }

//Customer

  SubmitForm1() {
    console.log(this.userForm.value);
    var type = this.userForm.value.id == null ? 'Add' : 'Update';
    this.userService
      .registerUserByAdmin(this.userForm.value)
      .subscribe((data) => {
        if (type == 'Add') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title:
              'Contact (' +
              this.userForm.value.username +
              ') saved Successfully',
          });
        } else {
          Swal.fire({
            icon: 'success',
            title:
              ' Contact (' +
              this.userForm.value.username +
              ') Updated Successfully',
          });
        }
        this.userForm.reset();
        this.GetAllUser();
       
      });
  }


  GetAllUser(){
    this.userService.getUserList().subscribe((data: any) => {
      this.customer = data;
  })
  }

  GetUserByID(ID: any) {
    this.userService.getUserByID(ID).subscribe((data: any) => {
      console.log('User Details', data);
      setTimeout(() => {
        $('#addCustomer-tab').click();
      }, 100);
      this.userForm.patchValue({
        id:data.id,
        username:data.username, 
        email:data.email,
        phone:data.phone,
        password:data.password
      });
    });
  }

  DeleteUserByID(ID: any) {
    this.userService.deleteUserByID(ID).subscribe((data: any) => {
      Swal.fire('Deleted!', '', 'success');
      this.GetAllUser();
    });
  }

}



