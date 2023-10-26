import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-complete-course';

  constructor(private _router: Router) {}

  ngOnInit() {
    /* this._router.events.subscribe((event)=>{
      console.log(event);
    }); */

    this._router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => console.log('Navigation started'));

    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => console.log('Navigation ended'));
  }

  /*   hello(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json));
  } */
}
