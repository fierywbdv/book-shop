import { Injectable } from '@angular/core';

import { DEFAULT_CONFIG_OPTIONS } from '@common/constants';
import { ConfigOptionsModel } from '@core/models/config-options.model';

@Injectable()
export class ConfigOptionsService {
  configOptions: ConfigOptionsModel = DEFAULT_CONFIG_OPTIONS;

  setOptions(newOptions: ConfigOptionsModel): void {
    this.configOptions = { ...this.configOptions, ...newOptions };
  }

  getOptions(): ConfigOptionsModel {
    return this.configOptions;
  }
}
