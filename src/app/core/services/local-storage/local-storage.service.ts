import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  setItem(key: string, value: string | unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): string | unknown {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}

export const LocalStorageServiceProvider = {
  provide: LocalStorageService,
  useClass: LocalStorageService,
};
