import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/services/languages/language.service';
import { SectionServiceService } from 'src/app/services/navbar/section-service.service';

@Component({
  selector: 'app-proyect-details',
  templateUrl: './proyect-details.component.html',
  styleUrls: ['./proyect-details.component.scss']
})
export class ProyectDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private sectionService: SectionServiceService
  ) { }

  public selectedIdProyect: number = 0;
  public selectedProyect: any = {};
  public pageContent: any = null;
  public loadingContent: boolean = true;

  ngOnInit(): void {
    this.loadPageContent()
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  public returnToHome() {
  }

  ngOnDestroy(): void {
    this.selectedIdProyect = 0;
    this.selectedProyect = {};
    this.sectionService.emitSectionChange('#work')

  }

  private getUrlId() {
    this.route.params.subscribe(params => {
      this.selectedIdProyect = params['id'];
      this.searchIdInPageContent();
    });
  }


  private loadPageContent() {
    this.languageService.pageContent.subscribe((content: any) => {
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
