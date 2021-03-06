import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';
import {AboutComponent} from './about/about.component';
import {MenuComponent} from './restaurant-detail/menu/menu.component';
import {ReviewsComponent} from './restaurant-detail/reviews/reviews.component';
import {OrderComponent} from './order/order.component'
import {OrderSummaryComponent} from './order-summary/order-summary.component';
import {LoginComponent} from './login/login.component';
import {AccreditedComponent} from './accredited/accredited.component';

export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'accredited', component: AccreditedComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {
    path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]
  },
  {path: 'order', component: OrderComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'about', component: AboutComponent}
]
