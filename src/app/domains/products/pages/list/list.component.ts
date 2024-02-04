import { Component, signal} from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import {Product} from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
@Component({
  selector: 'app-list',//importante para reutilizar componentes
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

products=signal<Product[]>([])

constructor(){
  const initProducts:Product[] =[
    {
        id: Date.now(),
        title:'Pro 1',
        price:100,
        image:'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title:'Pro 2',
      price:100,
      image:'https://picsum.photos/640/640?r=2',
      creationAt: new Date().toISOString()
  },
  {
    id: Date.now(),
    title:'Pro 3',
    price:100,
    image:'https://picsum.photos/640/640?r=12',
    creationAt: new Date().toISOString()
},
{
  id: Date.now(),
  title:'Pro 4',
  price:100,
  image:'https://picsum.photos/640/640?r=9',
  creationAt: new Date().toISOString()
},
{
  id: Date.now(),
  title:'Pro 5',
  price:100,
  image:'https://picsum.photos/640/640?r=1',
  creationAt: new Date().toISOString()
},
{
  id: Date.now(),
  title:'Pro 6',
  price:100,
  image:'https://picsum.photos/640/640?r=89',
  creationAt: new Date().toISOString()
},
  ];
  this.products.set(initProducts);
}
//metodo que reciba la informacion del boton
fromChild(event: String){
  console.log('estamos en el padre')
  console.log(event);
}
}
