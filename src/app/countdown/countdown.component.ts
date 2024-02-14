import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { CountdownForm } from '../interfaces/countdownForm'

// Date picker imports
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
} from '@angular/material/datepicker'
import { provideNativeDateAdapter } from '@angular/material/core'

import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { NgIf } from '@angular/common'

import { TimeService } from '../services/time.service'

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
export class CountdownComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private timeService: TimeService) {}

  countdownForm: CountdownForm = {
    title: '',
    date: null,
  }

  // added to deselect previous date
  todayDate: Date = new Date()

  private intervalId: any
  selectedDate: any

  @ViewChild('titleElement') titleElement: ElementRef | undefined
  @ViewChild('myDatepicker') datepicker: MatDatepicker<Date> | undefined
  @ViewChild('myDateInput') dateInput: MatDatepickerInput<Date> | undefined

  ngOnInit() {
    const val = this.get('title')
    if (val) {
      this.countdownForm.title = val
    }
    const date = this.get('date')
    if (date!==null && date!==undefined && date!=='null' && date!=='undefined' && date!=='') {
      this.countdownForm.date = date
    }
    this.startCountdown()
  }

  ngAfterViewInit() {
    window.setInterval(() => {
      this.resizeText()
    }, 2000)
  }

  resizeText() {
    if (this.titleElement) this.titleElement.nativeElement.resizeText()
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      // this.calculateTimeDifference(this.selectedDate)
      this.calculateTimeDifference(this.countdownForm.date)
    }, 1000)
  }

  calculateTimeDifference(targetDate: Date | null): string {
    this.save('date', targetDate)

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

  public save(key: string, value: any) {
    localStorage.setItem(key, value)
  }

  public get(key: string): any {
    return localStorage.getItem(key)
  }
  public titleChange(e: any) {
    this.save('title', e.target.value)
    this.countdownForm.title = this.get('title') || ''
  }

  isToday(date: Date | null): boolean {
    if (date === null) {
      return false
    }

    const today = new Date()
    const dateFromLocalStorage = new Date(date) // Convert string to date

    return dateFromLocalStorage.toDateString() === today.toDateString()
  }
}
