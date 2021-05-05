import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPopoutMenuComponent } from './header-popout-menu.component';

describe('HeaderPopoutMenuComponent', () => {
  let component: HeaderPopoutMenuComponent;
  let fixture: ComponentFixture<HeaderPopoutMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPopoutMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPopoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
