import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CitasTextualesService } from 'src/app/services/citas-textuales.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  public autorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private citasTextService: CitasTextualesService
  ) {
    this.autorForm = this.initAuthorForm();
  }

  public sectionActive = 'authors'
  public autores = null;

  ngOnInit(): void {
    this.obtenerAutores();
  }

  public changeSection(section: any) {
    this.sectionActive = section;
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


  public obtenerAutores() {

    this.citasTextService.obtenerAutores().subscribe(
      {
        next: (response) => {
          this.autores = response.data
          console.log(this.autores);
          console.log(response.data);

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
}
