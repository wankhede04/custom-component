import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSolidComponent } from './card-solid.component';

describe('CardSolidComponent', () => {
  let component: CardSolidComponent;
  let fixture: ComponentFixture<CardSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
