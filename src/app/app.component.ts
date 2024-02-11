import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from './countdown/countdown.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CountdownComponent]
})
export class AppComponent {
  title = 'Tour of Heroes';
  
}


