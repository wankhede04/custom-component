import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandLinksComponent } from './brand-links.component';

describe('BrandLinksComponent', () => {
  let component: BrandLinksComponent;
  let fixture: ComponentFixture<BrandLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
