import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'toHour'
})
export class ToHourPipe implements PipeTransform{

  transform(value: number) {
    let hours = value / 60;

    let minutes = value - (Math.floor(hours) * 60);

    return (hours > 0 ? Math.floor(hours) + 'h' : '' ) + (minutes > 0 ? (minutes > 10 ? minutes.toFixed() : '0' + minutes.toFixed()) + 'm' : '')
  }

}
