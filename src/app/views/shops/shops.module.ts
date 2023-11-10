import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  ButtonModule,
  CardModule,
  DropdownModule,
  GridModule,
  ProgressModule,
  SharedModule,
  WidgetModule
} from '@coreui/angular';
import {IconModule} from '@coreui/icons-angular';
import {ChartjsModule} from '@coreui/angular-chartjs';

import {DocsComponentsModule} from '@docs-components/docs-components.module';

import {ShopsComponent} from "./shops.component";
import {ShopWidgetComponent} from "./shop-widget/shop-widget.component";
import { ShopsRoutingModule} from "./shops-routing.module";

@NgModule({
  declarations: [
    ShopsComponent,
    ShopWidgetComponent,
  ],
  imports: [
    CommonModule,
    GridModule,
    WidgetModule,
    IconModule,
    DropdownModule,
    SharedModule,
    ButtonModule,
    CardModule,
    DocsComponentsModule,
    ProgressModule,
    ChartjsModule,
    ShopsRoutingModule,
  ],
  exports: [
    ShopsComponent,
    ShopWidgetComponent,
  ]
})
export class ShopsModule {
}
