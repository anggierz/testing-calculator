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

  it('should sum correctly when clicking button', () => {
    const inputA = fixture.debugElement.query(By.css('input[name="a"]')).nativeElement;
    const inputB = fixture.debugElement.query(By.css('input[name="b"]')).nativeElement;
    const sumBtn = fixture.debugElement.query(By.css('button[name="sum"]')).nativeElement;

    inputA.value = '5';
    inputA.dispatchEvent(new Event('input'));
    inputB.value = '3';
    inputB.dispatchEvent(new Event('input'));

    sumBtn.click();
    fixture.detectChanges();

    expect(component.result).toBe(8);
    const resultEl = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(resultEl.textContent).toContain('8');
  });

  it('should subtract correctly when clicking button', () => {
    const inputA = fixture.debugElement.query(By.css('input[name="a"]')).nativeElement;
    const inputB = fixture.debugElement.query(By.css('input[name="b"]')).nativeElement;
    const subtractBtn = fixture.debugElement.query(By.css('button[name="subtract"]')).nativeElement;

    inputA.value = '10';
    inputA.dispatchEvent(new Event('input'));
    inputB.value = '4';
    inputB.dispatchEvent(new Event('input'));

    subtractBtn.click();
    fixture.detectChanges();

    expect(component.result).toBe(6);
    const resultEl = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(resultEl.textContent).toContain('6');
  });

  it('should multiply correctly when clicking button', () => {
    const inputA = fixture.debugElement.query(By.css('input[name="a"]')).nativeElement;
    const inputB = fixture.debugElement.query(By.css('input[name="b"]')).nativeElement;
    const multiplyBtn = fixture.debugElement.query(By.css('button[name="multiply"]')).nativeElement;

    inputA.value = '7';
    inputA.dispatchEvent(new Event('input'));
    inputB.value = '6';
    inputB.dispatchEvent(new Event('input'));

    multiplyBtn.click();
    fixture.detectChanges();

    expect(component.result).toBe(42);
    const resultEl = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(resultEl.textContent).toContain('42');
  });

});
