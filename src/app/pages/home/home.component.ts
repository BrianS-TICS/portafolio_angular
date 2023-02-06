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

  ngOnInit(): void {
    this.obtieneCita();
  }

  public obtieneCita() {
    this.citasService.obtenerCitas().subscribe(
      {
        next: (response) => {
          this.citas = response;
          console.log(response);
        },
        error: (e) => {
          console.error(e)
        },
        complete: () => console.info('complete'),
      }
    )
  }

}
