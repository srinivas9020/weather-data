import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localtimeFromUnix'
})
export class LocaltimeFromUnixPipe implements PipeTransform {

  transform(value: number, ...args: number[]): Date | null {
    const [timezone] = [...args];
    return this.calculateLocalTime(value, timezone);
  }

  private calculateLocalTime(unixTime: number, timezone: number){
    return new Date((unixTime+timezone) * 1000);
  }

}
