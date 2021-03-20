import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnHoverColorizer]',
})
export class OnHoverColorizerDirective {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnterColorizer(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'hovered');
  }

  @HostListener('mouseleave') onMouseLeaveColorizer(): void {
    this.renderer.removeClass(this.elementRef.nativeElement, 'hovered');
  }

  @HostBinding('class.shadowed') get isHovered(): boolean {
    return this.elementRef.nativeElement.classList.contains('hovered');
  }
}
