import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyouComponent } from './tyou.component';

describe('TyouComponent', () => {
  let component: TyouComponent;
  let fixture: ComponentFixture<TyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
