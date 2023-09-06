import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'home' },
    { title: 'Asistencia', url: '/home', icon: 'list' },
    { title: 'Iniciar sesion', url: '/login', icon: 'person' },
  ];
  constructor() {}
}
