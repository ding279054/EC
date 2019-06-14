import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdItemComponent } from './ec/prod-item/prod-item.component';
import { ProductListComponent } from './ec/product-list/product-list.component';
import { CreateprodComponent } from './createprod/createprod.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdItemComponent,
    ProductListComponent,
    CreateprodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
