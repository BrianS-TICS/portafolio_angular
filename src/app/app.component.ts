import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/languages/language.service';

import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public pageContent: any;
  public loadingContent: boolean = true;
  public currentLanguague: string;

  constructor(
    private languageService: LanguageService
  ) { }


  ngOnInit(): void {
    AOS.init();
    this.currentLanguague = this.languageService.currentLanguague;
    this.loadPageLanguage();
  }

  public loadPageLanguage() {
    this.currentLanguague = this.languageService.currentLanguague;
    this.languageService.loadLanguageFile(this.currentLanguague).subscribe(
      {
        next: (response: Object) => {
          this.pageContent = response;
          this.languageService.pageContent.next(response);
        },
        error: error => {
          this.pageContent = this.languageService.loadDefaultLanguage();
        },
        complete: () => {
          this.loadingContent = false;
        }
      }
    );
  }

  public changeLanguage(newLanguage: string) {
    this.languageService.changeLanguage(newLanguage);
    this.loadPageLanguage();
  }

}
