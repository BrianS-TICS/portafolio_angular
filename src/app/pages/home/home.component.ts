import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { LanguageService } from 'src/app/services/languages/language.service';
import { SectionServiceService } from 'src/app/services/navbar/section-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './../../app.component.scss', './../../../styles.scss']
})
export class HomeComponent implements OnInit {

  public pageContent: any;
  public loadingContent: boolean = true;
  public isMobile: boolean = false;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private languageService: LanguageService,
    private sectionService: SectionServiceService,
    private elementRef: ElementRef
  ) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const currentSection = this.detectCurrentSection();
    this.sectionService.emitSectionChange(currentSection);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkScreenSize();
  }

  public detectCurrentSection(): any {
    const sections = this.elementRef.nativeElement.querySelectorAll('section');

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        return `#${section.id}`;
      }
    }

  }

  ngOnInit(): void {

    this.checkScreenSize();

    this.languageService.pageContent
      .pipe(takeUntil(this.destroy$))
      .subscribe((content: any) => {

        this.pageContent = content;

        if (Object.keys(content).length) {
          this.loadingContent = false;
          this.currentQuote = this.pageContent.quotes[this.quoteNumber]
        }

      });


    setInterval(() => {
      this.getNextQuote()
    }, 12000);


  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 481;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }


  public currentQuote = null;
  public quoteNumber = 0;

  public getNextQuote() {
    this.quoteNumber += 1;

    if (this.quoteNumber < this.pageContent.quotes.length) {
      this.currentQuote = this.pageContent.quotes[this.quoteNumber]
    } else {
      this.quoteNumber = 0;
      this.currentQuote = this.pageContent.quotes[this.quoteNumber]
    }

  }

}
