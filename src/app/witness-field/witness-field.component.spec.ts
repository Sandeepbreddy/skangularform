import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitnessFieldComponent } from './witness-field.component';

describe('WitnessFieldComponent', () => {
  let component: WitnessFieldComponent;
  let fixture: ComponentFixture<WitnessFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitnessFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
