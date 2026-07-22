import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterContainer } from './counter-container';

describe('CounterContainer', () => {
  let component: CounterContainer;
  let fixture: ComponentFixture<CounterContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
