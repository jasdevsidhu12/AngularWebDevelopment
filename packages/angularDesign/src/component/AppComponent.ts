import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../resources/sass/main.scss'],
  template: `<b>Be Bold</b>
  <main-comp></main-comp>`
})
export class AppComponent {
  app = { title: 'Minimal NgModule', name: 'Jasdev'};
  color= 'blue';
};
