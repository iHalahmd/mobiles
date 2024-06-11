import { Component } from '@angular/core';
import { Products } from './products';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Qais Library';
  inputsearch = "";
  carticon = "assets/images/basket-cart-icon.png";
  qty = 0;
  cart = [];


  mobiles: Products[]= [
    {id: 1, name: "ايفون", price: 5600, imge: "assets/images/iphone.png"},
    {id: 2, name: "سامسونج", price: 4800, imge: "assets/images/samsung.png"},
    {id: 3, name: "موتورولا edge 50 Ultra 5G", price: 2999, imge: "assets/images/motorolla.jpg"},
  ]

  search(mobiles: any[]){
    return mobiles.filter(item=> item.name.includes(this.inputsearch))
  }

  addToCard(){
    this.qty++;
  }
}
//Halah345

