import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/services/languages/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../../app.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('munuMovil') munuMovil: any;

  public movilMenuOpen: boolean = false

  public animations: string = 'movil-menu';

  private body: any;
  public pageContent;
  public loadingContent: boolean = true;

  constructor(
    private languageService: LanguageService
  ) {
    this.body = document.querySelector('body');
  }

  ngOnInit(): void {

    this.languageService.pageContent.subscribe((content: any) => {
      this.pageContent = content;
      if (Object.keys(content).length) {
        this.loadingContent = false;
      }
    });

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
