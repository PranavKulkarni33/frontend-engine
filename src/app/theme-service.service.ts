import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string;

  constructor() {
    this.theme = 'light-theme';
  }

  setTheme(theme: string) {
    this.theme = theme;
  }

  getTheme() {
    return this.theme;
  }
}