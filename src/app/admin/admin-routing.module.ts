import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from '../components/customer-login/customer-login.component'
import { HeaderComponent } from '../components/header/header.component';
import { CustomerRegistrationComponent } from '../components/customer-registration/customer-registration.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { CartItemComponent } from '../components/cart-item/cart-item.component';

const routes: Routes = [
{path:'Home',
component:HeaderComponent},
{path:'Login',
component:CustomerLoginComponent},
{path:'Register',
component:CustomerRegistrationComponent},
{path:'Admin',component:AdminDashboardComponent},
{path:'Cart',component:CartItemComponent},
{path:'',redirectTo:'/Home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
