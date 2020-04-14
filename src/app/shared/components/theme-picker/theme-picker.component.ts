// tslint:disable: member-ordering
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StyleManagerService } from './style-manager/style-manager.service';
import {
  ISiteTheme,
  ThemeStorageService,
} from './theme-storage/theme-storage.service';

@Component({
  selector: 'mon-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThemePickerComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  currentTheme: ISiteTheme;

  themes: ISiteTheme[] = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      name: 'deeppurple-amber',
      isDark: false,
      isDefault: false,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      name: 'indigo-pink',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      name: 'pink-bluegrey',
      isDark: true,
      isDefault: false,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      name: 'purple-green',
      isDark: true,
      isDefault: false,
    },
  ];

  constructor(
    public styleManager: StyleManagerService,
    private _themeStorage: ThemeStorageService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.installTheme(this._themeStorage.getStoredThemeName());
  }

  ngOnInit() {
    this.determineThemeName();
  }

  ngOnDestroy() {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  determineThemeName() {
    const queryParamSubscription = this._activatedRoute.queryParamMap
      .pipe(
        map((params) => params.get('theme')),
        filter(Boolean)
      )
      .subscribe((themeName) => this.installTheme(themeName as string));
    this._subscriptions.push(queryParamSubscription);
  }

  installTheme(themeName: string) {
    const theme = this.themes.find(
      (currentTheme) => currentTheme.name === themeName
    );

    if (!theme) {
      return;
    }

    this.currentTheme = theme;

    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle(
        'theme',
        `assets/global-styles/${theme.name}.css`
      );
    }

    if (this.currentTheme) {
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }
}
