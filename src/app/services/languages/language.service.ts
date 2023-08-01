import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  public selectedLenguagueOfPage: number = 0;

  public LENGUAGUESOFPAGE = [
    { 'number': 0, "languague": 'es ' },
    { 'number': 1, "languague": 'en' }
  ];


}
