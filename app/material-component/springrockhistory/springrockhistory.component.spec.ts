import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringrockhistoryComponent } from './springrockhistory.component';

describe('SpringrockhistoryComponent', () => {
  let component: SpringrockhistoryComponent;
  let fixture: ComponentFixture<SpringrockhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringrockhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringrockhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
