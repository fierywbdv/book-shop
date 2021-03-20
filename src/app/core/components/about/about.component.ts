import { Component, Inject, OnInit, Optional } from '@angular/core';

import { MESSAGES } from '@common/constants';
import { ConfigOptionsService } from '@core/services/config-options/config-options.service';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { StringGeneratorService } from '@core/services/generator/generator.service';
import { ConstantsService, AppDescriptionModel } from '@core/services/constants/constants.service';

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
