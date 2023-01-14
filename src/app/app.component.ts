import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public spinnerShow = true;
  title = 'portafolio';

  ngOnInit(): void {

    // TEMPORAL
    setTimeout(() => {
      this.spinnerShow = false;
    }, 1000);

  }

}
