import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CommonModule, ReversePipe,TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!:Product;//decorador input que viene desde el angular core

  //decorador output que viene desde el angular core
  @Output() addToCart = new EventEmitter();// permitira enviarle cosas del hijo al padre

  //funcion
  addToCartHandler(){
    this.addToCart.emit(this.product) 
  }
}
