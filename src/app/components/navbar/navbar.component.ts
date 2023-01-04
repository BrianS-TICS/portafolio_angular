import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public currentPage = 'home';

  constructor() {

  }

  ngOnInit(): void {

  }

  public handleSelectedPage(e : any) : void {
    const value = e.target.text
    this.currentPage = value.toLowerCase()
  }

}
