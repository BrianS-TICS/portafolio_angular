import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('munuMovil') munuMovil: any;


  public currentPage = 'inicio';
  public movilMenuOpen: boolean = false

  public animations: string = 'movil-menu';

  private body: any;

  constructor() {
    this.body = document.querySelector('body');
  }

  ngOnInit(): void {
    this.listenToAnimationEnd();
    this.listenToAnimationStart();
  }

  listenToAnimationEnd(): void {
    this.munuMovil.nativeElement.addEventListener('animationend', () => {
      console.log('animation ended');
    })
  }

  listenToAnimationStart(): void {
    this.munuMovil.nativeElement.addEventListener('animationstart', () => {
      console.log('animation estart');
    })
  }

  ngOnDestroy(): void {
    this.munuMovil.nativeElement.removeEventListener('animationstart');
  }

  public handleCloseMovilNav(e: any) {
    this.movilMenuOpen = false;
    this.body?.classList.remove('scroll-stop');
  }

  public handleMovilMenu(e: any) {
    this.body?.classList.toggle('scroll-stop');
    this.movilMenuOpen = !this.movilMenuOpen;
  }

  public handleSelectedPage(e: any): void {
    const value = e.target.text
    this.currentPage = value.toLowerCase()
  }

}
