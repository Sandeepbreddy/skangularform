import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccusedListComponent } from './accused-list.component';

describe('AccusedListComponent', () => {
  let component: AccusedListComponent;
  let fixture: ComponentFixture<AccusedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccusedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccusedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
