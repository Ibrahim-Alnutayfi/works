import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YahooApiComponent } from './yahoo-api.component';

describe('YahooApiComponent', () => {
  let component: YahooApiComponent;
  let fixture: ComponentFixture<YahooApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YahooApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YahooApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
