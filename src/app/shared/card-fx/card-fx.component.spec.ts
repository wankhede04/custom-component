import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFxComponent } from './card-fx.component';

describe('CardFxComponent', () => {
  let component: CardFxComponent;
  let fixture: ComponentFixture<CardFxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
