import {LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from "@angular/common";

@Pipe({
  name: 'rupiah'
})
export class RupiahPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return `Rp ${new DecimalPipe('en-US').transform(value, '')}`;
  }

}
