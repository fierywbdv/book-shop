import { Component, Inject, OnInit, Optional } from '@angular/core';

import { MESSAGES } from 'src/app/common/constants';
import { ConfigOptionsService } from 'src/app/services/config-options/config-options.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { StringGeneratorService } from 'src/app/services/generator/generator.service';
import {
  ConstantsService,
  AppDescriptionModel,
} from 'src/app/services/constants/constants.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private configOptionsService: ConfigOptionsService,
    @Optional() @Inject(ConstantsService) private constantsService?: AppDescriptionModel,
    @Optional() @Inject(StringGeneratorService) private stringGeneratorService?: string,
  ) {}

  ngOnInit(): void {
    this.localStorageService.setItem('configOptions', this.configOptionsService.configOptions);

    this.localStorageService.setItem(
      'appDescription',
      this.constantsService ||
        `${MESSAGES.ERRORS.COMMON}${MESSAGES.ERRORS.SERVICES.CONSTANTS_SERVICE}`,
    );

    this.localStorageService.setItem(
      'randomString',
      this.stringGeneratorService ||
        `${MESSAGES.ERRORS.COMMON}${MESSAGES.ERRORS.SERVICES.STRING_GENERATOR_SERVICE}`,
    );
  }
}
