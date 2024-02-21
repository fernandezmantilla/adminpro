import { Component } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent {
  changeTheme(theme: string) {
   const tema = document.querySelector('#theme');
   const url = `css/colors/${theme}.css`;
 
  tema?.setAttribute('href', url);
  }
}
