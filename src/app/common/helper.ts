import { ALPHABET_FOR_STRING_GENERATOR } from './constants';
import { GeneratorService } from '../services/generator/generator.service';

export const randomStringGenerator: (n: number) => string = (n: number) =>
  new Array(n)
    .fill('')
    .map(
      () =>
        ALPHABET_FOR_STRING_GENERATOR[
          Math.floor(Math.random() * ALPHABET_FOR_STRING_GENERATOR.length)
        ],
    )
    .join('');

export const GeneratorFactory: (generatorService: GeneratorService) => string = (
  generatorService: GeneratorService,
) => randomStringGenerator(generatorService.n);
