import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timefmt'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number, format: 'short' | 'long'): string {
    const kMsInSec = 1000;
    const kSecInMin = 60;
    const kMsInMin = kMsInSec * kSecInMin;
    const kMinInHour = 60;
    const kSecInHour = kMinInHour * kSecInMin;
    const kMsInHour = kMsInSec * kSecInHour;
    const kHoursInDay = 24;

    const ms = (value % kMsInSec)
        ,  s = (value / kMsInSec) % kSecInMin
        ,  m = (value / kMsInMin) % kMinInHour
        ,  h = (value / kMsInHour) % kHoursInDay
        ;
    const [H, M, S] = [h, m, s].map((v) => v.toFixed(0).padStart(2, '0'));
    const MS = ms.toFixed(0).padStart(3, '0');
    
    let result: string = (format === 'long') ? `${S}sec ${MS}ms` : `${S}.${MS}`;
    if (format === 'long') {
      if (m.toFixed(0) > '0') result = `${M}min ${result}`;
      if (h.toFixed(0) > '0') result = `${H}h ${result}`;
    } else {
      if (m.toFixed(0) > '0') result = `${M}:${result}`;
      if (h.toFixed(0) > '0') result = `${H}:${result}`;
    }

    return result;
  }
}
