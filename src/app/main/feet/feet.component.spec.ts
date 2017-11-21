import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeetComponent } from './feet.component';

describe('FeetComponent', () => {
  let component: FeetComponent;
  let fixture: ComponentFixture<FeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
