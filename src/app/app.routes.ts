import { Routes } from '@angular/router';
import { BuyCatComponent } from './components/buy-cat/buy-cat.component';
import { AppComponent } from './app.component';
import { OrderPageComponent } from './components/order-page/order-page.component';

export const routes: Routes = [
    {path: 'buyCat', component: BuyCatComponent},
    {path: 'order', component: OrderPageComponent },
    {path: '', component: AppComponent}
];
