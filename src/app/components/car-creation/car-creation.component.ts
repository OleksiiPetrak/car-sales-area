import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarApiService } from 'src/app/services/car-api.service';
import { MediaApiService } from 'src/app/services/media-api.service';

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
     private carApiService: CarApiService,
     private mediaApiService: MediaApiService) { }

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
      body: this.formBuilder.control(''),
      file: this.formBuilder.control('')
    });
  }

  onMediaSelected(event){
    const file:File = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("carMediaFile", file);
      this.mediaApiService.saveNewCarMedia(formData).subscribe((data:Object)=>this.creationStatus = data);
    }
  }

  onSubmit(carInfo){
    console.log(carInfo);
    this.carApiService.createNewAddverticement(carInfo).subscribe((data:Object)=>this.creationStatus = data);
    console.log('Car creation works');
    //this.createAddverticement.emit(carInfo);
  }
}
