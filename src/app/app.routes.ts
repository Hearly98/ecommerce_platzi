import { Routes } from '@angular/router';
//Colocar la lista de componentes que queremos importar
import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';

export const routes: Routes = [
    {
        path:'',
        component:ListComponent
    },
    {
        path:'about',
        component:AboutComponent
    }
];
