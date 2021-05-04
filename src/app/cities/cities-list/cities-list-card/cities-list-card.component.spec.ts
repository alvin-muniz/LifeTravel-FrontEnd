import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesListCardComponent } from './cities-list-card.component';

describe('CitiesListCardComponent', () => {
  let component: CitiesListCardComponent;
  let fixture: ComponentFixture<CitiesListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
