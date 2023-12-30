import { SectionServiceService } from 'src/app/services/navbar/section-service.service';
import { AfterContentInit, Component, Directive, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from 'src/app/services/languages/language.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-proyect-details',
  templateUrl: './proyect-details.component.html',
  styleUrls: ['./proyect-details.component.scss']
})


export class ProyectDetailsComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;

  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private sectionService: SectionServiceService,
    private mediaMatcher: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = mediaMatcher.matchMedia('(max-width: 670px)');

  }

  public selectedIdProyect: number = 0;
  public selectedProyect: any = {};
  public pageContent: any = null;
  public loadingContent: boolean = true;

  private destroy$: Subject<void> = new Subject<void>();
  private defaultSectionId = '#work';

  ngOnInit(): void {
    this.loadPageContent()
    this.sectionService.emitSectionChange(this.defaultSectionId);

  };


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.selectedIdProyect = 0;
    this.selectedProyect = {};
  }

  public scrollToSection(sectionId: string): void {
    const yOffset = -80;
    const section = document.querySelector(sectionId);
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const section = document.querySelector(sectionId);
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });

      }, 500);
    }
  }

  private getUrlId() {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.selectedIdProyect = params['id'];
        this.searchIdInPageContent();
      });
  }


  private loadPageContent() {
    this.languageService.pageContent
      .pipe(takeUntil(this.destroy$))
      .subscribe((content: any) => {
        this.pageContent = content;
        if (Object.keys(content).length) {
          this.getUrlId();
        }
      });
  }

  private searchIdInPageContent() {

    const proyects = this.pageContent.proyects;
    this.selectedProyect = proyects.find((proyect: any) => proyect.id == this.selectedIdProyect)
    if (this.selectedProyect) {
      window.document.title = 'Brian Sanchez | ' + this.selectedProyect.title;
      this.loadingContent = false;
      return
    }

    const secundaryProyects = this.pageContent.secundaty_proyects;
    this.selectedProyect = secundaryProyects.find((proyect: any) => proyect.id == this.selectedIdProyect)
    if (this.selectedProyect) {
      window.document.title = 'Brian Sanchez | ' + this.selectedProyect.title;
      this.loadingContent = false;
    }

    if (!this.selectedProyect) {
      this.router.navigate(['./']);
    }

  }

}
