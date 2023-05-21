import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './pages/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipieListComponent } from './pages/recipie-book/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './pages/recipie-book/recipie-item/recipie-item.component';
import { RecipieDetailComponent } from './pages/recipie-book/recipie-detail/recipie-detail.component';
import { RecipieComponent } from './pages/recipie-book/recipie/recipie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipieListComponent,
    RecipieItemComponent,
    RecipieDetailComponent,
    RecipieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
