import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarItemComponent} from './car-item.component';
import { SelectDirective } from './select.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarItemComponent,
    SelectDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
