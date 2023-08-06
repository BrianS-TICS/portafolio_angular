import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { LanguageService } from 'src/app/services/languages/language.service';
import { SectionServiceService } from 'src/app/services/navbar/section-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './../../app.component.scss', './../../../styles.scss'],
})
export class HomeComponent implements OnInit {

  public pageContent: any;
  public loadingContent: boolean = true;

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


  public detectCurrentSection(): any {
    const sections: HTMLElement[] = this.elementRef.nativeElement.querySelectorAll('section');
    const currentSection = Array.from(sections).find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });

    return currentSection ? `#${currentSection.id}` : null;
  }

  ngOnInit(): void {

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

  public currentQuote = null;
  public quoteNumber = 0;

  public getNextQuote() {
    this.quoteNumber = (this.quoteNumber + 1) % this.pageContent.quotes.length;
    this.currentQuote = this.pageContent.quotes[this.quoteNumber];
  }

}
