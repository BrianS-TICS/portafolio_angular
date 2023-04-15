import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss', './../../app.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  data = [
    {
      imageUrl : "./assets/proyectos/devjobsimg.webp",
      alterText : "imagen de Blog de cafe",
    }
  ]

  ngOnInit(): void {

  }

}
