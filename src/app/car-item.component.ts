import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'car-item',
    templateUrl: './car-item.component.html',
    styleUrls: ['./car-item.component.css']
})

export class CarItemComponent{
    @Input() car;
    @Output() delete = new EventEmitter();

    onDetails(id: number){
        console.log(`Car item ${id} clicked!`);
        this.delete.emit();
    }
}