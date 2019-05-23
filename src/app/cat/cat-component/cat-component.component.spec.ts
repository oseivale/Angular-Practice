import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatComponentComponent } from './cat-component.component';

describe('CatComponentComponent', () => {
  let component: CatComponentComponent;
  let fixture: ComponentFixture<CatComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
