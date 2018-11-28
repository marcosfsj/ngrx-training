/* libs */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/* Components */
import { AppComponent } from './app.component';

/* Custom modules */
import { TodosModule } from './todos/todos.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipes/recipe-list/recipe-list-item/recipe-list-item.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, RecipesComponent, RecipeListComponent, RecipeListItemComponent, RecipeEditComponent],
  imports: [BrowserModule, NgbModule, StoreModule.forRoot({}), TodosModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
