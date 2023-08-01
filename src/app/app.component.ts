import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }
  public selectedLenguagueOfPage: number = 0;


  ngOnInit(): void {
    this.getCurrentLanguague()

  }

  public getCurrentLanguague() {
    const languagueFinded = localStorage.getItem('LanguagueSelected');

    if (languagueFinded) {
      const languageObj = this.LENGUAGUESOFPAGE.find(obj => obj.languague === languagueFinded);
      if (languageObj) {
        const key = languageObj.number;
        this.selectedLenguagueOfPage = this.LENGUAGUESOFPAGE[key].number;
      }
    } else {
      localStorage.setItem('LanguagueSelected', this.LENGUAGUESOFPAGE[0].languague); // Guardar el valor de la propiedad "languague"
      const defaultLanguageObj = this.LENGUAGUESOFPAGE.find(obj => obj.number === 0);
      if (defaultLanguageObj) {
        this.selectedLenguagueOfPage = defaultLanguageObj.number;
      }
    }

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

    location.reload();
  }

  public changePageToSpanish() {
    const languageObj = this.LENGUAGUESOFPAGE.find(obj => obj.languague === 'es');
    if (languageObj) {
      const key = languageObj.number;
      this.selectedLenguagueOfPage = this.LENGUAGUESOFPAGE[key].number;
      localStorage.setItem('LanguagueSelected', 'es');
    }
    location.reload();

  }

}
