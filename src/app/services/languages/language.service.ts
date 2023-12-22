import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as defaultPageContent from '../../../assets/languages/es.json';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public currentLanguague: string = 'es';
  public pageContent: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(
    private http: HttpClient
  ) {}

  public changeLanguage(newLanguage: string) {
    this.currentLanguague = newLanguage;
  }

  public loadLanguageFile(language: string): Observable<any> {
    const url = `/assets/languages/${language}.json`;
    return this.http.get(url);
  }

  public loadDefaultLanguage() : any {
    return defaultPageContent;
  }

}
