import { Component } from '@angular/core';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'app';
  prepareRoute(outlet) {
    console.log("preparing",outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
