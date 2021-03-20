import { Injectable, InjectionToken } from '@angular/core';

import { DEFAULT_RANDOM_STRING_LENGTH } from '@common/constants';
import { GeneratorFactory } from '@common/helper';

@Injectable()
export class GeneratorService {
  n: number = DEFAULT_RANDOM_STRING_LENGTH;

  setGeneratedInstanceLength(newLength: number): void {
    this.n = newLength;
  }

  getGeneratedInstanceLength(): number {
    return this.n;
  }
}

export const StringGeneratorService: InjectionToken<string> = new InjectionToken<string>(
  'StringGeneratorService',
);

export const StringGeneratorServiceProvider = {
  provide: StringGeneratorService,
  useFactory: GeneratorFactory,
  deps: [GeneratorService],
};
