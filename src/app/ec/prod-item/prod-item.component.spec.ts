import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdItemComponent } from './prod-item.component';

describe('ProdItemComponent', () => {
  let component: ProdItemComponent;
  let fixture: ComponentFixture<ProdItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
