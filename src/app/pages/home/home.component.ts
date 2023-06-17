import { Component, OnInit } from '@angular/core';
import { CitasTextualesService } from 'src/app/services/citas-textuales.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './../../app.component.scss', './../../../styles.scss']
})
export class HomeComponent implements OnInit {

  constructor(private citasService: CitasTextualesService) { }

  public selectedLenguagueOfPage: number = 0;

  public LENGUAGUESOFPAGE = [
    { 'number': 0, "languague": 'es ' },
    { 'number': 1, "languague": 'en' }
  ];

  public LEVELSOFKNOWLEDGE = [
    {
      1: 'Básico',
      2: 'Intermedio',
      3: 'Avanzado',
    },
    {
      1: 'Basic',
      2: 'Intermediate',
      3: 'Advanced',
    }
  ]

  public PROYECTSECTIONTEXT = [
    'Proyectos',
    'Proyects'
  ]

  public KNOWLEDSECTIONTEXT = [
    'Conocimientos',
    'knowledge'
  ]

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

  ngOnInit(): void {

    this.currentCita = this.citas[0]
    this.getCurrentLanguague()
  }

  public getCurrentLanguague() {
    const languagueFinded = localStorage.getItem('LanguagueSelected');

    if (languagueFinded) {
      const languageObj = this.LENGUAGUESOFPAGE.find(obj => obj.languague === languagueFinded);
      if (languageObj) {
        const key = languageObj.number;
        this.selectedLenguagueOfPage = this.LENGUAGUESOFPAGE[key].number;
      }
    } else {
      localStorage.setItem('LanguagueSelected', this.LENGUAGUESOFPAGE[0].languague); // Guardar el valor de la propiedad "languague"
      const defaultLanguageObj = this.LENGUAGUESOFPAGE.find(obj => obj.number === 0);
      if (defaultLanguageObj) {
        this.selectedLenguagueOfPage = defaultLanguageObj.number;
      }
    }

  }

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
