import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringrockopenComponent } from './springrockopen.component';

describe('SpringrockopenComponent', () => {
  let component: SpringrockopenComponent;
  let fixture: ComponentFixture<SpringrockopenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringrockopenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringrockopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
