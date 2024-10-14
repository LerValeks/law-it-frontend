import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ManageOrdersComponent} from './components/admin/manage-orders/manage-orders.component';
import {ManageProductsComponent} from './components/admin/manage-products/manage-products.component';
import {LoginComponent} from './components/login/login.component';
import {NoAccessComponent} from './components/no-access/no-access.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {OrdersComponent} from './components/orders/orders.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shopping', component: ShoppingCartComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'manage-orders', component: ManageOrdersComponent },
  { path: 'manage-products', component: ManageProductsComponent },
  { path: 'no-access', component: NoAccessComponent },
  { path: '**', component: NotFoundComponent }
];
