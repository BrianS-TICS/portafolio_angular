import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('munuMovil') munuMovil: any;

  public movilMenuOpen: boolean = false

  public animations: string = 'movil-menu';

  private body: any;

  constructor() {
    this.body = document.querySelector('body');
  }

  ngOnInit(): void {

  }

  public handleCloseMovilNav(e: any) {
    this.movilMenuOpen = false;
    this.body?.classList.remove('scroll-stop');
  }

  public handleMovilMenu(e: any) {
    this.body?.classList.toggle('scroll-stop');
    this.movilMenuOpen = !this.movilMenuOpen;
  }

}
