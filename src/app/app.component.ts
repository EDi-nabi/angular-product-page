import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shop';

  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.events.pipe(
    //   filter((event) => event instanceof NavigationEnd)
    // )
    // .subscribe((event) => {
    //   console.log('NavigationEnd:', event);
    // });
  }
}
