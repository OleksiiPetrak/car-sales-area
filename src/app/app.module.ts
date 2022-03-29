import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { CarItemComponent} from './components/car-item/car-item.component';
import { SelectDirective } from './directives/select.directive';
import { CarSearchFormComponent } from './components/car-search-form/car-search-form.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarListComponent } from './components/car-list/car-list.component';

const appRoutes: Routes =[
  { path: "", component: CarListComponent },
  { path:"details/:id", component: CarDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CarItemComponent,
    SelectDirective,
    CarSearchFormComponent,
    CarDetailsComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
