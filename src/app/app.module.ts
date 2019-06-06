import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdItemComponent } from './ec/prod-item/prod-item.component';
import { ProductListComponent } from './ec/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdItemComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
