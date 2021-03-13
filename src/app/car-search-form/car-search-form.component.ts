import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'car-search-form',
  templateUrl: './car-search-form.component.html',
  styleUrls: ['./car-search-form.component.css']
})
export class CarSearchFormComponent implements OnInit{
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.form = this.formBuilder.group({
      brand: this.formBuilder.control('Opel'),
      model: this.formBuilder.control('Omega'),
      fuel: this.formBuilder.control('Petrol')
    });
  }

  onSubmit(carSearchItem){
    console.log(carSearchItem);
  }
}
