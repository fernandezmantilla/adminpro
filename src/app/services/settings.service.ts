import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private tema = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('tema') || './assets/css/colors/default-dark.css';
    this.tema?.setAttribute('href', url);
  }

  changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`;
    this.tema?.setAttribute('href', url);
    localStorage.setItem('tema', url);

    this.checkCurrentTheme();

  }
  checkCurrentTheme() {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    // console.log(links);
    links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemUrl = `./assets/css/colors/${btnTheme}.css`;
      const currTheme = this.tema?.getAttribute('href');
      if (btnThemUrl === currTheme) {
        elem.classList.add('working');
      }

    })
  }

}
