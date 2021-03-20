import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { APP_TITLE } from 'src/app/common/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;

  constructor(private _renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this._renderer.setProperty(this.appTitle.nativeElement, 'innerText', APP_TITLE);
  }
}
