import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

import { DEFAULT_BORDER_COLOR } from '@common/constants';

@Directive({
  selector: '[appOnClickMarker]',
})
export class OnClickMarkerDirective {
  @Input('appOnClickMarker') markColor: string = DEFAULT_BORDER_COLOR;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @HostListener('click') onClickMarker(): void {
    this._setProperty('fontSize', '20px');
    this._setProperty('border', `solid 3px ${this.markColor}`);
    this._setProperty('padding', `2px`);
  }

  private _setProperty(propertyName: string, propertyValue: string): void {
    this.renderer.setProperty(this.elementRef.nativeElement.style, propertyName, propertyValue);
  }
}
