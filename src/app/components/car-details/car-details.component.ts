import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarApiService } from 'src/app/services/car-api.service';

@Component({
  selector: 'car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  @Input() carDetails;
  id: number | undefined;
  private subscription: Subscription;

  constructor(private carApiService: CarApiService, private activatedRoute: ActivatedRoute){
    this.subscription = this.activatedRoute.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit(){
    this.carApiService.getCar(this.id).subscribe((data:Car)=>this.carDetails=data);    
 }
}
