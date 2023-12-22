import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, debounceTime, take, takeUntil } from 'rxjs';
import { LanguageService } from 'src/app/services/languages/language.service';
import { SectionServiceService } from 'src/app/services/navbar/section-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './../../app.component.scss', './../../../styles.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public pageContent: any;
  public loadingContent: boolean = true;

  private destroy$: Subject<void> = new Subject<void>();
  private startSectionId = '#start';

  constructor(
    private languageService: LanguageService,
    private sectionService: SectionServiceService,
    private elementRef: ElementRef
  ) { }

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
        window.document.title = 'Brian Sanchez | ' + this.pageContent.job;
      });

  }


  public detectCurrentSection(): any {
    const sections: HTMLElement[] = this.elementRef.nativeElement.querySelectorAll('section');
    const currentSection = Array.from(sections).find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });

    return currentSection ? `#${currentSection.id}` : null;
  }


  downloadCV(): void {

    const pdfUrl = this.pageContent.resume_path;

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'brian_sanchez_cv.pdf';

    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  }
}
