import { Routes } from '@angular/router';
import { ShoppingPageComponent } from './components/shopping-page/shopping-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'shop', component: ShoppingPageComponent},
    {path: '', component: AppComponent}
];
