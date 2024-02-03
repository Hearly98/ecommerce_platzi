import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',//importante para reutilizar componentes
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

//metodo que reciba la informacion del boton
fromChild(event: String){
  console.log('estamos en el padre')
  console.log(event);
}
}
