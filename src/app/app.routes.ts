import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ManageOrdersComponent} from './components/admin/manage-orders/manage-orders.component';
import {ManageProductsComponent} from './components/admin/manage-products/manage-products.component';
import {LoginComponent} from './components/login/login.component';
import {NoAccessComponent} from './components/no-access/no-access.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {OrdersComponent} from './components/orders/orders.component';
import {authGuard} from './guards/auth.guard';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [authGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [authGuard] },
  { path: 'manage-orders', component: ManageOrdersComponent, canActivate: [authGuard] },
  { path: 'manage-products', component: ManageProductsComponent, canActivate: [authGuard] },
  { path: 'no-access', component: NoAccessComponent },
  { path: '**', component: NotFoundComponent }
];
