import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/services/languages/language.service';
import { SectionServiceService } from 'src/app/services/navbar/section-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../../app.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('munuMovil') munuMovil: any;

  public movilMenuOpen: boolean = false
  public animations: string = 'movil-menu';

  public currentLanguague: string = 'en';
  public loadingContent: boolean = true;
  public pageContent: any;
  public currentSection: string = '#start';
  private body: any;

  constructor(
    private languageService: LanguageService,
    private sectionService: SectionServiceService,
  ) {
    this.body = document.querySelector('body');
  }

  ngOnInit(): void {

    this.languageService.pageContent.subscribe((content: any) => {
      this.pageContent = content;
      if (Object.keys(content).length) {
        this.loadingContent = false;
      }
    });

    this.sectionService.sectionChange$.subscribe((sectionId) => {
      this.currentSection = sectionId;
    });

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
