import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string | boolean = false;
  @HostListener("error") handleError():void{
    const elNative = this.elHost.nativeElement
    console.log("✨ Esta Imagen Revento ->",this.elHost);
    
    if (this.customImg){
      elNative.src=this.customImg
    }else{
      elNative.src="../../../assets/images/spyxfamily.jpg"
    }
  }

  constructor(private elHost:ElementRef) { 

  }

}
