import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { CountdownForm } from '../countdownForm';


// date picker imports
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule],
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent {
  hero: CountdownForm = {
    title: 'Time to Midsummer  Eve 2022!',
    date: new Date('2022-06-24')
  };
}
