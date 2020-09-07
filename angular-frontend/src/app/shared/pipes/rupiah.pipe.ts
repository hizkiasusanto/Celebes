import {Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from "@angular/common";

@Pipe({
  name: 'rupiah'
})
export class RupiahPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): String {
    return `Rp ${new DecimalPipe('en-US').transform(value, '')}`;
  }

}
