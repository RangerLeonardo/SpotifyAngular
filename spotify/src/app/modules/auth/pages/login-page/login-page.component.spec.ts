import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia retornar invalido el formulario', () => {
    //arrange = arrranque
    const mockCredentials= {
      email:"0x0x0x0",
      password:"12312312111111111111111122"
    }

    const emailForm: any = component.formLogin.get("email");
    const passwordForm: any = component.formLogin.get("password");

    //act = actuar, activar
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //assert = lo que se espera que sea al final


    expect(component.formLogin.invalid).toEqual(true); //esto es un true o un false
  });

  it('deberia retornar valido el formulario', () => {
    //arrange = arrranque
    const mockCredentials= {
      email:"correo@correo.com",
      password:"12345678"
    }

    const emailForm: any = component.formLogin.get("email");
    const passwordForm: any = component.formLogin.get("password");

    //act = actuar, activar
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //assert = lo que se espera que sea al final


    expect(component.formLogin.invalid).toEqual(false); //esto es un true o un false
  });

  it("Debería estar escrito Iniciar Sesión",() =>{
    const elementref= fixture.debugElement.query( By.css(".form-action button"))
    const getInnerText = elementref.nativeElement.innerText
    expect (getInnerText).toEqual("Iniciar Sesión")
  })
});
