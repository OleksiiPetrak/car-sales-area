import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarApiService } from 'src/app/services/car-api.service';

@Component({
  selector: 'app-car-creation',
  templateUrl: './car-creation.component.html',
  styleUrls: ['./car-creation.component.css']
})
export class CarCreationComponent implements OnInit {
  form: FormGroup;
  creationStatus: Object;
  //@Output() createAddverticement = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
     private carApiService: CarApiService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      brand: this.formBuilder.control(''),
      model: this.formBuilder.control(''),
      year: this.formBuilder.control(''),
      engineVolume: this.formBuilder.control(''),
      mileage: this.formBuilder.control(''),
      description: this.formBuilder.control(''),
      price: this.formBuilder.control(''),
      vinCode: this.formBuilder.control(''),
      color: this.formBuilder.control(''),
      body: this.formBuilder.control('')
    });
  }

  onSubmit(carInfo){
    console.log(carInfo);
    this.carApiService.createNewAddverticement(carInfo).subscribe((data:Object)=>this.creationStatus = data);
    console.log('Car creation works');
    //this.createAddverticement.emit(carInfo);
  }
}
