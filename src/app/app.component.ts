import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }
  public selectedLenguagueOfPage: number = 0;


  ngOnInit(): void {

  }

  public LENGUAGUESOFPAGE = [
    { 'number': 0, "languague": 'es' },
    { 'number': 1, "languague": 'en' }
  ];

  public changePageToEnglish() {
    const languageObj = this.LENGUAGUESOFPAGE.find(obj => obj.languague === 'en');
    if (languageObj) {
      const key = languageObj.number;
      this.selectedLenguagueOfPage = this.LENGUAGUESOFPAGE[key].number;
      localStorage.setItem('LanguagueSelected', 'en');
    }

    // TEMPORAL 
    location.reload()
  }

  public changePageToSpanish() {
    const languageObj = this.LENGUAGUESOFPAGE.find(obj => obj.languague === 'es');
    if (languageObj) {
      const key = languageObj.number;
      this.selectedLenguagueOfPage = this.LENGUAGUESOFPAGE[key].number;
      localStorage.setItem('LanguagueSelected', 'es');
    }

    // TEMPORAL 
    location.reload()
  }

}
