import { ConfigOptionsModel } from '@core/models/config-options.model';

export const APP_TITLE = 'book shop';

export const CART_ITEM_COUNT = {
  MIN: 1,
  MAX: 9999,
};

export const DEFAULT_INIT_BOOK_COUNT = 1;

export const DEFAULT_CONFIG_OPTIONS: ConfigOptionsModel = {
  id: '',
  login: '',
  email: '',
};

export const ALPHABET_FOR_STRING_GENERATOR =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export const DEFAULT_RANDOM_STRING_LENGTH = 7;

export const MESSAGES = {
  ERRORS: {
    COMMON: 'Some troubles with ',
    SERVICES: {
      CONSTANTS_SERVICE: 'ConstantsService',
      STRING_GENERATOR_SERVICE: 'stringGeneratorService',
    },
  },
};
