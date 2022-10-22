import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';

//componente de prueba 
@Component({
  template:"<img class='testing-directive' appImgBroken [src]='srckmock'>"
})

class TestComponent {
  public srckMock:any = null;
}

describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture:ComponentFixture <TestComponent>; //nos ayuda para poder interactuar con todas las propiedades del elemento


  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance
    fixture.detectChanges();
  })

  it('should create an instance', () => {
    const mockElement = new ElementRef("")
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it("ALVVVVVVV",()=>{
    expect(component).toBeTruthy();
  })

  it("YA QUIERO TERMINAR", (done:DoneFn) =>{
    //arranque
    const beforeImgElement = fixture.debugElement.query(By.css(".testing-directive")).nativeElement
    const beforeImgSrc= beforeImgElement.src //tenemos la url antes de ser cambiada por la directiva
    component.srckMock = undefined;
    //accionar
    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css(".testing-directive")).nativeElement
      const afterImgSrc= beforeImgElement.src //tenemos la url antes de ser cambiada por la directiva
      expect(afterImgSrc).toEqual("http://localhost:9876/assets/images/spyxfamily.jpg")
      done()
    }, 3000);
    //que espero
  })
});
