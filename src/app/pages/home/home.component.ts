import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './../../app.component.scss', './../../../styles.scss']
})
export class HomeComponent implements OnInit {

  constructor(private citasService: CitasTextualesService) { }

  public citas: any = [];

  ngOnInit(): void {
    this.obtieneCitas();
  }

  public obtieneCitas() {
    this.citasService.obtenerCitas().subscribe(
      (response: any) => {
        this.citas = response;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
