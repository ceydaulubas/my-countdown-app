import { Injectable } from '@angular/core';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

@Injectable({
  providedIn: 'root' // Make the service available throughout the application
})
export class TimeService {

  constructor() { }

  getTimeDifference(targetDate: Date): string {
    const now = new Date();
    const days = differenceInDays(targetDate, now);
    const hours = differenceInHours(targetDate, now) % 24;
    const minutes = differenceInMinutes(targetDate, now) % 60;
    const seconds = differenceInSeconds(targetDate, now) % 60;

    const timeDiff = `${days} days, ${hours} h, ${minutes} m, ${seconds} s`;
    return timeDiff.replace(/,/g, ' '); // Remove commas for a cleaner look
  }
}
