import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularpackageComponent } from './popularpackage.component';

describe('PopularpackageComponent', () => {
  let component: PopularpackageComponent;
  let fixture: ComponentFixture<PopularpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularpackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
