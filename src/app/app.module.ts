/* libs */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/* Components */
import { AppComponent } from './app.component';

/* Custom modules */
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, StoreModule.forRoot({}), TodosModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
