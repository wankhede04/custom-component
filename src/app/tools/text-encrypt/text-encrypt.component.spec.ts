import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEncryptComponent } from './text-encrypt.component';

describe('TextEncryptComponent', () => {
  let component: TextEncryptComponent;
  let fixture: ComponentFixture<TextEncryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEncryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEncryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
