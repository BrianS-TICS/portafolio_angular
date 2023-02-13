import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CitasTextualesService } from 'src/app/services/citas-textuales.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  public autorForm: FormGroup;
  public citasForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private fb2: FormBuilder,
    private citasTextService: CitasTextualesService
  ) {
    this.autorForm = this.initAuthorForm();
    this.citasForm = this.initCitasForm();
  }

  public sectionActive = 'authors';
  public autores = [];
  public citas = [];

  ngOnInit(): void {
    this.obtenerAutores();
    this.obtenerCitas();
  }

  public changeSection(section: any) {
    this.sectionActive = section;
    console.log(this.sectionActive);
  }

  public crearAutor() {
    const autor = this.autorForm.getRawValue();
    if (this.autorForm.invalid) {
      return;
    }

    this.citasTextService.crearAutor(autor).subscribe(
      {
        next: (response) => {
          this.autores.push(response.data);

          this.autorForm = this.initAuthorForm();
        },
        error: (e) => {
          console.log(e);
        }
      }
    )

  }

  public showModal() {

  }

  public obtenerAutores() {

    this.citasTextService.obtenerAutores().subscribe(
      {
        next: (response) => {
          this.autores = response.data
          console.log(response.data);
        },
        error: (e) => {
          console.log(e);
        }
      }
    )

  }

  public deleteAuthor(id: any) {
    console.log(id);
    this.citasTextService.eliminarAutor(id).subscribe({
      next: (response) => {

      },
      error: (e) => {
        console.log(e);
      }
    })
  }


  public deleteQuote(id: any) {
    this.citasTextService.eliminarCita(id).subscribe({
      next: (response) => {
        // this.citas.filter()
      },
      error: (e) => {
        console.log(e);
      }
    })
  }


  public obtenerCitas() {

    this.citasTextService.obtenerCitas().subscribe(
      {
        next: (response) => {
          this.citas = response.data
          console.log(response);
        },
        error: (e) => {
          console.log(e);
        }
      }
    )

  }

  public crearCita() {

    const cita = this.citasForm.getRawValue();
    cita.author_id = Number(cita.author_id)

    if (this.citasForm.invalid) {
      return
    }

    this.citasTextService.crearCita(cita).subscribe(
      {
        next: (response) => {
          if (this.citas.length > 0) {
            this.citas.push(response.data)
          } else {
            this.citas = [response.data]
          }
          console.log(response.data);
          this.citasForm.reset();
        },
        error: (e) => {
          console.log(e);
        }
      }
    )
  }

  public initAuthorForm() {
    return this.autorForm = this.formBuilder.group({
      nombre: new FormControl({ value: null, disabled: false }, [Validators.required]),
      apellidos: new FormControl({ value: null, disabled: false }, [Validators.required]),
    });
  }

  public initCitasForm() {
    return this.citasForm = this.fb2.group({
      contenido: new FormControl({ value: null, disabled: false }, [Validators.required]),
      author_id: new FormControl({ value: null, disabled: false }, [Validators.required]),
      fecha_difusion: new FormControl({ value: null, disabled: false }, [Validators.required])
    });
  }
}
