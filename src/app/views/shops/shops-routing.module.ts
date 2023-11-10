import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShopsComponent} from "./shops.component";
import {ShopCreateComponent} from "./shop-create/shop-create.component";

const routes: Routes = [
  {
    path: '',
    component: ShopsComponent,
    data: {
      title: 'Мої магазини'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'shops'
      },
      {
        path: 'create',
        component: ShopCreateComponent,
        data: {
          title: 'Новий магазин'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule {

}
