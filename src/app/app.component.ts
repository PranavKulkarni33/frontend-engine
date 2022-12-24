import { Component } from '@angular/core';
import { ThemeService } from './theme-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-engine';
  theme: string;

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.getTheme();
  }

  toggleTheme(event: any ) {
    this.theme = event.checked ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(this.theme);
  }
}
