import * as moment from 'moment'

export class DateOnly {
  date: number
  month: number
  year: number

  constructor(json: any) {
    this.date = json.date
    this.month = json.month
    this.year = json.year
  }

  displayDate(): string {
    return this.toDate().toLocaleString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  toDate(): Date {
    return new Date(this.year, this.month, this.date);
  }

}

export function convertToDateOnly(date: moment.Moment) : DateOnly {
  return new DateOnly({
    date: date.date(),
    month: date.month(),
    year: date.year()
  })
}
