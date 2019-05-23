import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggyComponent } from './doggy.component';

describe('DoggyComponent', () => {
  let component: DoggyComponent;
  let fixture: ComponentFixture<DoggyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
