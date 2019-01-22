import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumseatsComponent } from './stadiumseats.component';

describe('StadiumseatsComponent', () => {
  let component: StadiumseatsComponent;
  let fixture: ComponentFixture<StadiumseatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumseatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumseatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
