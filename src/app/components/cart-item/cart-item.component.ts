import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(index: number) {
    Swal.fire({
      icon: 'warning',

      title: 'Do you want to Delete this Product ?',

      showCancelButton: true,

      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.removeCartItem(index);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
