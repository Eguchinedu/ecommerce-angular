import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCompComponent } from './check-comp.component';

describe('CheckCompComponent', () => {
  let component: CheckCompComponent;
  let fixture: ComponentFixture<CheckCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
