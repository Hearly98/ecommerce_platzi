import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) img:string='';//decorador
  @Input({required:true}) price:number=0;
  @Input({required:true}) title:string=''

  @Output() addToCart = new EventEmitter();

  addCartHandler(){
    console.log('click form child');
    this.addToCart.emit('Hola este es una mensaje desde el hijo')
  }
}
