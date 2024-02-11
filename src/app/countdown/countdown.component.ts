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
    date: new Date()
  };

  // added to deselect previous date
  todayDate: Date = new Date();

  onTitleChange(newTitle: string) {
    this.hero.title = newTitle;
  }

  onDateChange(newDate: Date) {
    this.hero.date = newDate as Date;
  }

  calculateTimeDifference(targetDate: Date): string {
    return this.timeService.getTimeDifference(targetDate);
  }
}


