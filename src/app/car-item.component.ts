import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from './models/car';

@Component({
    selector: 'car-item',
    templateUrl: './car-item.component.html',
    styleUrls: ['./car-item.component.css']
})

export class CarItemComponent implements OnInit {

    car: Car;

    constructor(private http: HttpClient){}

    ngOnInit(){
        this.http.get('http://localhost/car/3').subscribe((data:Car)=>this.car=data);
    }
}