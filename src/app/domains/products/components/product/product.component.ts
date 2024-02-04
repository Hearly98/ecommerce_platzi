import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!:Product;//decorador input que viene desde el angular core

  //decorador output que viene desde el angular core
  @Output() addToCart = new EventEmitter();// permitira enviarle cosas del hijo al padre

  //funcion
  addToCartHandler(){
    console.log('click form child');
    this.addToCart.emit('Hola este es una mensaje desde el hijo'+ this.product.title) 
  }
}
