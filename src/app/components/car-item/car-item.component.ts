import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'car-item',
    templateUrl: './car-item.component.html',
    styleUrls: ['./car-item.component.css']
})

export class CarItemComponent{
    @Input() car;

    constructor(private router: Router){}

    onDetails(id: number){
        console.log(`Car item ${id} clicked!`);
        this.router.navigate([`/details/${id}`]);
    }
}