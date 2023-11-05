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
  private changeQuoteInterval;
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

  public detectCurrentSection(): any {
    const sections: HTMLElement[] = this.elementRef.nativeElement.querySelectorAll('section');
    const currentSection = Array.from(sections).find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });

    return currentSection ? `#${currentSection.id}` : null;
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    clearInterval(this.changeQuoteInterval);
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
          this.currentQuote = this.pageContent.quotes[this.quoteNumber]
        }
        window.document.title = 'Brian Sánchez | ' +  this.pageContent.job;
      });


    this.changeQuoteInterval = setInterval(() => {
      this.getNextQuote()
    }, 12000);

  }



  public currentQuote = null;
  public quoteNumber = 0;

  public getNextQuote() {

    const divQuote = document.querySelector('#quoteMainNode');
    const btnQuote = document.querySelector('#quoteBtnNode');

    let divQuoteClasses = divQuote.classList.value;
    let btnQuoteClasses = btnQuote.classList.value;

    divQuote.classList.remove('animate__fadeInRightBig');
    btnQuote.classList.remove('animate__fadeInRightBig');

    divQuoteClasses = "cita-textual animate__animated animate__fadeInRightBig";
    divQuote.classList.value = divQuoteClasses;

    btnQuoteClasses = "cita-textual animate__animated animate__fadeInBottomRight";
    btnQuote.classList.value = btnQuoteClasses;

    divQuote.addEventListener('animationend', () => {
      divQuote.classList.remove('animate__fadeInRightBig');
      btnQuote.classList.remove('animate__fadeInBottomRight');

    }, { once: true });

    this.quoteNumber = (this.quoteNumber + 1) % this.pageContent.quotes.length;
    this.currentQuote = this.pageContent.quotes[this.quoteNumber];
  }

}
