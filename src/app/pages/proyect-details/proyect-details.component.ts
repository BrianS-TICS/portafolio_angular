import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/services/languages/language.service';
import { SectionServiceService } from 'src/app/services/navbar/section-service.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-proyect-details',
  templateUrl: './proyect-details.component.html',
  styleUrls: ['./proyect-details.component.scss']
})
export class ProyectDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService,
  ) {
  }

  public selectedIdProyect: number = 0;
  public selectedProyect: any = {};
  public pageContent: any = null;
  public loadingContent: boolean = true;

  private destroy$: Subject<void> = new Subject<void>();


  ngOnInit(): void {
    this.loadPageContent()
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete(); 
    this.selectedIdProyect = 0;
    this.selectedProyect = {};
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
    this.loadingContent = false;

  }

}
