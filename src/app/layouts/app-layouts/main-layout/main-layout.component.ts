import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss', '../../../app.component.scss']
})
export class MainLayoutComponent implements OnInit {

  loading$: Observable<boolean> = of(false);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loading$ = this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),map((e) => e instanceof NavigationStart)
    );
  }

}
