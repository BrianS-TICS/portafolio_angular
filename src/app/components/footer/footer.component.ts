import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/languages/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  public pageContent : any;
  public loadingContent: boolean = true;

  constructor( private languageService : LanguageService) { }


  ngOnInit(): void {

    this.languageService.pageContent.subscribe((content: any) => {
      this.pageContent = content;
      if (Object.keys(content).length) {
        this.loadingContent = false;
      }
    });
    
  }

}
