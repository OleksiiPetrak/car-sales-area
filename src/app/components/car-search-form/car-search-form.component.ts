import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CarApiService } from 'src/app/services/car-api.service';

@Component({
  selector: 'car-search-form',
  templateUrl: './car-search-form.component.html',
  styleUrls: ['./car-search-form.component.css']
})
export class CarSearchFormComponent implements OnInit{
  form: FormGroup;
  @Output() applyFilter = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private carListService: CarApiService){}

  ngOnInit(){
    this.form = this.formBuilder.group({
      brand: this.formBuilder.control(''),
      model: this.formBuilder.control(''),
      //, Validators.compose([
      //  Validators.required,
      //  Validators.pattern('[\\w\\-\\s\\/]+')])),
      body: this.formBuilder.control(''),
      priceMin: this.formBuilder.control(''),
      priceMax: this.formBuilder.control('')
      //fuel: this.formBuilder.control('Petrol')
    });
  }

  onSubmit(carSearchItem){
    console.log(carSearchItem);
    this.applyFilter.emit(carSearchItem);
  }
}
