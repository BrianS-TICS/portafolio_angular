import { Component, OnInit } from '@angular/core';
import { CitasTextualesService } from 'src/app/services/citas-textuales.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './../../app.component.scss', './../../../styles.scss']
})
export class HomeComponent implements OnInit {

  constructor(private citasService: CitasTextualesService) { }

  public citas: any = [];
  public currentCita = null;
  public citaNumber = 0;

  ngOnInit(): void {
    this.obtieneCita();
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

  public obtieneNextCita() {
    this.citaNumber = this.citaNumber + 1;

    if (this.citaNumber < this.citas.length) {
      this.currentCita = this.citas[this.citaNumber]
    }else{
      this.citaNumber = 0;
      this.currentCita = this.citas[this.citaNumber]
    }
  }

}
