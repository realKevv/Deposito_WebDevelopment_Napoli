import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2ContattoComponent } from './ex2-contatto';

describe('Ex2ContattoComponent', () => {
  let component: Ex2ContattoComponent;
  let fixture: ComponentFixture<Ex2ContattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex2ContattoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex2ContattoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
