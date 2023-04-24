import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPropComponent } from './img-prop.component';

describe('ImgPropComponent', () => {
  let component: ImgPropComponent;
  let fixture: ComponentFixture<ImgPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgPropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
