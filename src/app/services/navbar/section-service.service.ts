import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionServiceService {

  private sectionChangeSubject = new Subject<string>();

  sectionChange$ = this.sectionChangeSubject.asObservable();

  emitSectionChange(sectionId: string) {
    this.sectionChangeSubject.next(sectionId);
  }

}
