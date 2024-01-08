import { MediaMatcher } from '@angular/cdk/layout';
import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, debounceTime, takeUntil } from 'rxjs';
import { LanguageService } from 'src/app/services/languages/language.service';
import { SectionServiceService } from 'src/app/services/navbar/section-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public pageContent: any;
  public loadingContent: boolean = true;

  private destroy$: Subject<void> = new Subject<void>();
  private startSectionId = '#start';
  mobileQuery: MediaQueryList;

  constructor(
    private languageService: LanguageService,
    private sectionService: SectionServiceService,
    private elementRef: ElementRef,
    private mediaMatcher: MediaMatcher,

  ) { 
    this.mobileQuery = mediaMatcher.matchMedia('(max-width: 670px)');

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.scrollSubject.next();
  }

  private scrollSubject = new Subject<void>();
  private scrollSubscription: Subscription;

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.scrollSubscription.unsubscribe();
  }
  ngOnInit(): void {

    this.sectionService.emitSectionChange(this.startSectionId);

    this.scrollSubscription = this.scrollSubject.pipe(debounceTime(0)).subscribe(
      () => {
        const currentSection = this.detectCurrentSection();
        if (currentSection) {
          this.sectionService.emitSectionChange(currentSection);
        }
      });

    this.languageService.pageContent
      .pipe(takeUntil(this.destroy$))
      .subscribe((content: any) => {
        this.pageContent = content;
        if (Object.keys(content).length) {
          this.loadingContent = false;
        }

        if (this.pageContent.job) {
          window.document.title = 'Brian Sanchez | ' + this.pageContent.job;
        }

      });

  }

  shouldShowElement(index: number): boolean {
    return index % 2 === 0;
  }

  public detectCurrentSection(): any {
    const sections: HTMLElement[] = this.elementRef.nativeElement.querySelectorAll('section');
    const currentSection = Array.from(sections).find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });

    return currentSection ? `#${currentSection.id}` : null;
  }


  downloadPDF(): void {

    const pdfUrl = this.pageContent.resume_path;

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = '';

    if ( pdfUrl == "/assets/resumes/Resume - Brian Sanchez.pdf" ) {
      link.download = 'Brian Sanchez - Resume.pdf';

    }else {
      link.download = 'CV - Brian-Sanchez.pdf';
    }


    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  }
}
