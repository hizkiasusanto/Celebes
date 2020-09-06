import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  ticksInADay = 60 * 60 * 24 * 1000;
  constructor() {
  }

  now = () : Date => new Date();

  today = () : Date => this.removeTime(new Date());

  addDays = (date: Date, day: number) : Date => new Date(date.getTime() + day * this.ticksInADay)

  removeTime = (date: Date) : Date => new Date(date.setHours(0,0,0));

}
