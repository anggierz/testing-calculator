import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { By } from '@angular/platform-browser';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should initialize a, b and result with 0', () => {
    expect(component.a).toBe(0);
    expect(component.b).toBe(0);
    expect(component.result).toBe(0);

    const resultadoHtml = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(resultadoHtml.textContent).toContain('0');
  });
});
