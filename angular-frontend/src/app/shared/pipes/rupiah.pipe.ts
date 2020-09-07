import {Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from "@angular/common";

@Pipe({
  name: 'rupiah'
})
export class RupiahPipe implements PipeTransform {

  transform(value: number | string, ...args: unknown[]): string {
    return `Rp ${new DecimalPipe('en-US').transform(value, '')}`;
  }

}
