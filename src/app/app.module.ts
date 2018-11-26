/* libs */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

/* Components */
import { AppComponent } from './app.component';

/* Custom modules */
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodosModule, StoreModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
