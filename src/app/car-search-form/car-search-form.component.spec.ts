import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSearchFormComponent } from './car-search-form.component';

describe('CarSearchFormComponent', () => {
  let component: CarSearchFormComponent;
  let fixture: ComponentFixture<CarSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
