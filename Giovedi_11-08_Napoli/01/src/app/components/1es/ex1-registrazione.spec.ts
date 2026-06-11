import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex1RegistrazioneComponent } from './ex1-registrazione';

describe('Ex1RegistrazioneComponent', () => {
  let component: Ex1RegistrazioneComponent;
  let fixture: ComponentFixture<Ex1RegistrazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex1RegistrazioneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex1RegistrazioneComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
