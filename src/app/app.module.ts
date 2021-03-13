import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarItemComponent} from './car-item.component';
import { SelectDirective } from './directives/select.directive';
import { CarSearchFormComponent } from './car-search-form/car-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarItemComponent,
    SelectDirective,
    CarSearchFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
