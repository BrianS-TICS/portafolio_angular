import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from 'src/app/services/languages/language.service';
import { SectionServiceService } from 'src/app/services/navbar/section-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../../app.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  @ViewChild('munuMovil') munuMovil: any;
  public movilMenuOpen: boolean = false
  public animations: string = 'movil-menu';
  public currentLanguague: string = 'en';
  public loadingContent: boolean = true;
  public pageContent: any;
  public currentSection: string = '';
  private body: any;
  private ngUnsubscribe = new Subject<void>();

  constructor(
    private languageService: LanguageService,
    private sectionService: SectionServiceService,
  ) { }

  ngOnInit(): void {

    this.body = document.querySelector('body');

    this.languageService.pageContent.pipe(takeUntil(this.ngUnsubscribe)).subscribe((content: any) => {
      this.pageContent = content;
      this.loadingContent = Object.keys(content).length === 0;
    });

    this.sectionService.sectionChange$.subscribe((sectionId) => {
      this.currentSection = sectionId;
    });

  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public scrollToSection(sectionId: string): void {
    const yOffset = -80;
    const section = document.querySelector(sectionId);
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

    }
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

  public handleCloseMovilNav(e: any) {
    this.movilMenuOpen = false;
    this.body?.classList.remove('scroll-stop');
  }

  public handleMovilMenu(e: any) {
    this.body?.classList.toggle('scroll-stop');
    this.movilMenuOpen = !this.movilMenuOpen;
  }

}
