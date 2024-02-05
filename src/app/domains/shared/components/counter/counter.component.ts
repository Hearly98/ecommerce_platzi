
import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
//ciclo de vida

@Input({required:true}) duration =0;
@Input({required:true}) message='';
counter = signal(0);
counterRef:number | undefined;


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
const duration = changes['duration'];
console.log(duration);
if(duration && duration.currentValue !== duration.previousValue){
  this.doSomething();
}
}
ngOnInit(){
  //despues del render
  //corre 1 vez
  //async, then, subs
  console.log('ngOnInit');
  console.log('-'.repeat(10));
  console.log('duration =>', this.duration);
  console.log('message =>', this.message);
  this.counterRef=window.setInterval(()=>{
    //correr cada cierto tiempo
    console.log('run interval');
    this.counter.update(statePrev=>statePrev+1);
  },1000)
}
ngAfterViewInit(){
  //after render
  //preguntar si los hijos de este componentes ya fueron renderizados

  console.log('ngAfterViewInit');
  console.log('-'.repeat(10));
}
ngOnDestroy(){
  //ver cuando el componente se destruye
  console.log('ngOnDestroy');
  console.log('-'.repeat(10));
  window.clearInterval(this.counterRef);//para destruir el intervalo
}

doSomething(){
  console.log('changeDuration');
}
}
