import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value >= 1e6) {
      return `${(value/1e6).toFixed(1)} MB`
    } else if (value >= 1e3) {
      return `${(value/1e3).toFixed(1)} KB`
    }
    return `${value} B`;
  }

}
