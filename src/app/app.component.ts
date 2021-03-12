import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Car } from './models/car';
import { Collection } from './models/collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'car-sales-area';
  carItems: Collection<Car>;

  constructor(private http: HttpClient){}

   ngOnInit(){
      this.http.get('http://localhost/car/cars').subscribe((data:Collection<Car>)=>this.carItems=data);    
   }

   onMediaItemDelete(carItems){}
}
