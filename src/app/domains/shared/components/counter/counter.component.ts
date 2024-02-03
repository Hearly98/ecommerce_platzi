import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
//ciclo de vida

@Input({required:true}) duration =0;
@Input({required:true}) message='';


constructor(){
  //no debe ser asyncrono | NO ASYNC
  //es para declarar variables directas
  //se corre antes de renderizarse el componente, antes que se muestre en la pantalla
  console.log('constructor');
  console.log('-'.repeat(10));
}
ngOnChanges(changes: SimpleChanges){//SimplesChanges sirve te avisa que ha ocurrido un cambio
//antes y durante el renderizado
//cada que hagamos un cambio, estara detectando los cambios
console.log('ngOnChanges');
console.log('-'.repeat(10));
console.log(changes);//para saber que cosas estan cambiando
}
}
