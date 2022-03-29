import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/models/collection';
import { Car } from 'src/app/models/car';
import { CarApiService } from 'src/app/services/car-api.service';
import { BracketsConverter } from 'src/app/helpers/bracets-converter';
import { listenerCount } from 'process';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  title = 'car-sales-area';
  carItems: Collection<Car>;

  constructor(private carApiService: CarApiService){}

   ngOnInit(){
      this.carApiService.getAllCarsList().subscribe((data:Collection<Car>)=>this.carItems=data);
   }

   onApplyFilter(carSearchItem){
     console.log('Output event starts to work...');

     this.carApiService.getFilteredCarsList(carSearchItem).subscribe((data:Collection<Car>)=>this.carItems=data); 
     console.log('Output event works!');
   }
}
