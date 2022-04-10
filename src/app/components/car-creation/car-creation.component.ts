import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarApiService } from 'src/app/services/car-api.service';

@Component({
  selector: 'app-car-creation',
  templateUrl: './car-creation.component.html',
  styleUrls: ['./car-creation.component.css']
})
export class CarCreationComponent implements OnInit {
  form: FormGroup;
  mediaFiles: string [] = [];
  creationStatus: Object;

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
      body: this.formBuilder.control(''),
      file: this.formBuilder.control('')
    });
  }

  onMediaSelected(event: any): void{
    for (let i = 0; i < event.target.files.length; i++) {
      this.mediaFiles.push(event.target.files[i]);
    }
  }

  onSubmit(carInfo: any): void{
    const formData = new FormData();
   
    formData.append('brand', carInfo.brand);
    formData.append('model', carInfo.model);
    formData.append('year', carInfo.year);
    formData.append('engineVolume', carInfo.engineVolume);
    formData.append('mileage', carInfo.mileage);
    formData.append('description', carInfo.description);
    formData.append('price', carInfo.price);
    formData.append('vinCode', carInfo.vinCode);
    formData.append('color', carInfo.color);
    formData.append('body', carInfo.body);
    for (let i = 0; i < this.mediaFiles.length; i++) {
      formData.append('files', this.mediaFiles[i]);      
    }

    this.carApiService.createNewAddverticement(formData).subscribe((data:Object)=>this.creationStatus = data);
  }
}
