import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'car-sales-area';

  constructor(private router: Router){}

  ngOnInit(): void{
  }

  onHomeLabelClick(){
    console.log('Home label clicked');
    this.router.navigate([''])
  }

  onCarCreation(){
    console.log('Car creation button clicked');
    this.router.navigate(['addverticementcreation']);
  }
}
