import { EventEmitter, Injectable } from '@angular/core';

export interface ISiteTheme {
  accent: string;
  isDark: boolean;
  isDefault: boolean;
  name: string;
  primary: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeStorageService {
  static storageKey = 'site-theme-storage-current-name';

  onThemeUpdate: EventEmitter<ISiteTheme> = new EventEmitter<ISiteTheme>();

  clearStorage() {
    try {
      window.localStorage.removeItem(ThemeStorageService.storageKey);
    } catch {}
  }

  getStoredThemeName(): string | null {
    let retVal: string | null = null;
    try {
      retVal = window.localStorage[ThemeStorageService.storageKey] || null;
    } catch {
      retVal = null;
    }
    return retVal;
  }

  storeTheme(theme: ISiteTheme) {
    try {
      window.localStorage[ThemeStorageService.storageKey] = theme.name;
    } catch {}
    this.onThemeUpdate.emit(theme);
  }
}
