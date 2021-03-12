import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from './models/car';
import { Collection } from './models/collection';

@Component({
    selector: 'car-item',
    templateUrl: './car-item.component.html',
    styleUrls: ['./car-item.component.css']
})

export class CarItemComponent implements OnInit {

    carItems: Collection<Car>;

    constructor(private http: HttpClient){}

    ngOnInit(){
        this.http.get('http://localhost/car/cars').subscribe((data:Collection<Car>)=>this.carItems=data);
    }
}