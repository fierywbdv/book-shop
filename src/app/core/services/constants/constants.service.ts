import { InjectionToken } from '@angular/core';

export interface AppDescriptionModel {
  app: string;
  ver: string;
}

const APP_DESCRIPTION: AppDescriptionModel = {
  app: 'BookShop',
  ver: '1.0',
};

export const ConstantsService: InjectionToken<string> = new InjectionToken<string>(
  'ConstantsService',
);

export const ConstantsServiceProvider = { provide: ConstantsService, useValue: APP_DESCRIPTION };
