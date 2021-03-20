import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { APP_TITLE } from '@common/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;

  constructor(private _renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this._renderer.setProperty(this.appTitle.nativeElement, 'innerText', APP_TITLE);
  }
}
