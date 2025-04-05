import { Routes } from '@angular/router';
import { BuyCatComponent } from './components/buy-cat/buy-cat.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { ShopComponent } from './components/shop/shop.component';
import { AdoptNavComponent } from './components/adopt-nav/adopt-nav.component';
import { CareNavComponent } from './components/care-nav/care-nav.component';
import { FunNavComponent } from './components/fun-nav/fun-nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';

export const routes: Routes = [
    {path: 'buyCat', component: BuyCatComponent},
    {path: 'order', component: OrderPageComponent },
    {path: 'shopNav', component: ShopComponent},
    {path: 'adoptNav', component: AdoptNavComponent},
    {path: 'careNav', component: CareNavComponent},
    {path: 'funNav', component: FunNavComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'wishlist', component: WishlistComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'transactionHistory', component: TransactionHistoryComponent}
];
