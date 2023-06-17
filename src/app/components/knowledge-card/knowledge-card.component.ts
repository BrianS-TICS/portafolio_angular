import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-card',
  templateUrl: './knowledge-card.component.html',
  styleUrls: ['./knowledge-card.component.scss']
})
export class KnowledgeCardComponent implements OnInit {

  constructor() { }


  @Input() technologyImage: string = '';
  @Input() technologyName: string = '';
  @Input() technologyUrl: string = '';
  @Input() namelevel: string = '';
  @Input() backGroundcolor: string = '';

  public BACKGROUNDCOLORS = [
    "success",
    'warning',
    'danger'
  ]

  ngOnInit(): void {

  }

}
