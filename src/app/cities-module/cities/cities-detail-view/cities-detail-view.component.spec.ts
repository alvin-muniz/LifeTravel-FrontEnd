import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesDetailViewComponent } from './cities-detail-view.component';

describe('CitiesDetailViewComponent', () => {
  let component: CitiesDetailViewComponent;
  let fixture: ComponentFixture<CitiesDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
