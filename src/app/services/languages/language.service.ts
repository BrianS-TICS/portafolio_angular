import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as defaultPageContent from '../../../assets/languages/es.json';
import { Observable, catchError, map, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public currentLanguague: string = 'es';
  public pageContent: BehaviorSubject<any> = new BehaviorSubject({});
  private languageCache: { [key: string]: any } = {};

  constructor(
    private http: HttpClient
  ) {
    this.getLocalStorageLanguage();
  }

  private getLocalStorageLanguage() {

    const selectedLocalStorageLan = localStorage.getItem('lan');
    if (selectedLocalStorageLan) {
      this.currentLanguague = selectedLocalStorageLan;
    }

    if (!selectedLocalStorageLan) {
      this.putLocalStorageLanguage(this.currentLanguague)
    }

  }

  private putLocalStorageLanguage(lan: string) {
    localStorage.setItem('lan', lan);
  }

  public changeLanguage(newLanguage: string) {
    this.currentLanguague = newLanguage;
    this.putLocalStorageLanguage(newLanguage);
  }

  public loadLanguageFile(language: string): Observable<any> {

    if (this.languageCache[language]) {
      return of(this.languageCache[language]);
    }

    const url = `/assets/languages/${language}.json`;
    return this.http.get(url).pipe(
      map((data: any) => {
        this.languageCache[language] = data;
        return data;
      }),
      catchError((error: any) => {
        console.error('Error loading language file:', error);
        const pageContent = this.loadDefaultLanguage();
        return pageContent;
      })
    );
  }

  public loadDefaultLanguage(): any {
    return defaultPageContent;
  }

}
