import { Component, Input, SimpleChanges, inject, signal} from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';

import {Product} from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { Category } from '@shared/models/category.model';
import { CategoryService } from '@shared/services/category.service';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-list',//importante para reutilizar componentes
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

products=signal<Product[]>([]);

categories=signal<Category[]>([]);


private cartService = inject(CartService);
private productService = inject(ProductService);
private categoryService = inject(CategoryService);
//metodo que reciba la informacion del boton
//cada vez que le demos click al boton de carrito enviara la informacion del producto y se agregará

@Input() category_id?:string;

ngOnInit(){
this.getCategories();
}

ngOnChanges(changes: SimpleChanges){
    this.getProducts();
}
addToCart(product: Product){
  this.cartService.addToCart(product);
}
private getCategories(){
  this.categoryService.getAll()
  .subscribe({
    next:(data)=>{
      this.categories.set(data);
    },
    error:()=>{

    }
  })
}
private getProducts(){
  this.productService.getProducts(this.category_id)
  .subscribe({
    next:(products)=>{
      this.products.set(products);
    },
    error:()=>{

    }
  })
}
}
