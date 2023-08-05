import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { CitasTextualesService } from 'src/app/services/citas-textuales.service';
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

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private citasService: CitasTextualesService,
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
    const sections = this.elementRef.nativeElement.querySelectorAll('section');

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        return `#${section.id}`;
      }
    }

  }

  ngOnInit(): void {

    this.languageService.pageContent
      .pipe(takeUntil(this.destroy$))
      .subscribe((content: any) => {
        this.pageContent = content;
        if (Object.keys(content).length) {
          this.loadingContent = false;
        }
      });

    this.currentCita = this.citas[0];

    // this.sectionService.sectionChange$.
    // pipe(
    //   take(10),
    // ).subscribe((sectionId) => {
    //   const yOffset = -80;
    //   const section = document.querySelector(sectionId);
    //   if (section) {
    //     const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    //     window.scrollTo({ top: y, behavior: 'smooth' });
    //   }
    // });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    window.removeEventListener('scroll', this.onScroll);
  }


  public citas: any = [
    {
      name_author: "Dean Kamen",
      contenido: "De vez en cuando, una nueva tecnología, un antiguo problema y una gran idea se convierten en una innovación"
    },
    {
      name_author: "Bill Gates",
      contenido: "Las grandes oportunidades nacen de haber sabido aprovechar las pequeñas"
    },
    {
      name_author: "Jack Dorsey",
      contenido: "El mundo se puede cambiar en 140 caracteres"
    },
    {
      name_author: "Sydney J. Harris",
      contenido: "El verdadero peligro no es que las computadoras comenzaran a pensar como los hombres, sino que los hombres comenzaran a pensar como las computadoras"
    }
  ];

  public currentCita = null;
  public citaNumber = 0;

  public obtieneCita() {
    this.citasService.obtenerCitas().subscribe(
      {
        next: (response) => {
          this.citas = response.data;
          this.currentCita = this.citas[this.citaNumber]
        },
        error: (e) => {
          console.error(e)
        }
      }
    )
  }

  public getNextCita() {
    this.citaNumber = this.citaNumber + 1;

    if (this.citaNumber < this.citas.length) {
      this.currentCita = this.citas[this.citaNumber]
    } else {
      this.citaNumber = 0;
      this.currentCita = this.citas[this.citaNumber]
    }
  }

}
