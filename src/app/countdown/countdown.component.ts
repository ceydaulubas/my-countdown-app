import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CountdownForm } from '../countdownForm';

// date picker imports
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

import { TimeService } from '../services/time.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, FormsModule, CommonModule, NgIf],
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent {
  constructor(private timeService: TimeService) { }

  hero: CountdownForm = {
    title: '',
    date: null,
  };

  // added to deselect previous date
  todayDate: Date = new Date();

  calculateTimeDifference(targetDate: Date | null): string {
    if (targetDate) {
      return this.timeService.getTimeDifference(targetDate);
    } else {
      return '';
    }
  }

  get camelCaseTitle() {
    return this.hero.title.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
  }

  isToday(date: Date | null): boolean {
    if (date === null) {
      return false;
    }

    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }
}
