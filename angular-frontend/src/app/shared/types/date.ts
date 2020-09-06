
export class DateOnly {
  date: number
  month: number
  year: number

  constructor(json: any) {
    this.date = json.date
    this.month = json.month
    this.year = json.year
  }

  displayDate() : string {
    return new Date(this.year,this.month,this.date).toLocaleString('en-GB',{year: 'numeric', month: 'long', day: 'numeric'})}

}
