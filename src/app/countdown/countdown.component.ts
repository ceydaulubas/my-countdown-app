import { Component, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule, NgIf } from '@angular/common'

import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { provideNativeDateAdapter } from '@angular/material/core'
import { MatFormFieldModule } from '@angular/material/form-field'

import { CookieService } from 'ngx-cookie-service'

// date picker imports
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
} from '@angular/material/datepicker'

// Import services
import { TimeService } from '../services/timeService/time.service'

// Import the interface
import { CountdownForm } from '../countdownForm'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    FormsModule,
    CommonModule,
    NgIf,
  ],
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent implements OnInit, OnDestroy {
  // constructor(private timeService: TimeService) {}
  constructor(private cookieService: CookieService, private timeService: TimeService) {}
  countdownForm: CountdownForm = {
    title: '',
    date: null,
    // Implement titleChange using BehaviorSubject or a custom observable
    titleChange: new BehaviorSubject<string>(''),
  }

  // added to deselect previous date
  todayDate: Date = new Date()

  private intervalId: any
  selectedDate: any

  @ViewChild('myDatepicker') datepicker: MatDatepicker<Date> | undefined
  @ViewChild('myDateInput') dateInput: MatDatepickerInput<Date> | undefined

  ngOnInit() {

    const persistedTitle = this.cookieService.get('countdownTitle');
    if (persistedTitle) {
      this.countdownForm.title = persistedTitle;
    }else {
      this.countdownForm.title = '';
    }

    this.countdownForm.titleChange.subscribe(() => {
      this.cookieService.set('countdownTitle', this.countdownForm.title);
    });

    const persistedDate = this.cookieService.get('countdownDate');
    if (persistedDate) {
      this.countdownForm.date = new Date(persistedDate);
      console.log('Retrieved date from cookie:', persistedDate);
    }

    // Listen for changes in the selected date
    this.dateInput?.dateChange.subscribe((date: Date) => {
      this.selectedDate = date
      if (date) {
        // Check if a date is actually selected
        this.startCountdown()
      }
    })
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  startCountdown() {

    try {
      this.cookieService.set('countdownTitle', this.countdownForm.title);
      this.cookieService.set('countdownDate', this.countdownForm.date ? this.countdownForm.date.toString() : '');
      console.log('Updated cookies with title:', this.countdownForm.title, 'and date:', this.countdownForm.date);
    } catch (error) {
      console.error('Error setting cookies:', error);
    }
    
    this.intervalId = setInterval(() => {
      this.calculateTimeDifference(this.selectedDate)
    }, 1000)
  }

  calculateTimeDifference(targetDate: Date | null): string {
    if (targetDate) {
      return this.timeService.getTimeDifference(targetDate)
    } else {
      return ''
    }
  }

  get camelCaseTitle() {
    return this.countdownForm.title.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }

  isToday(date: Date | null): boolean {
    if (date === null) {
      return false
    }

    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }
}
