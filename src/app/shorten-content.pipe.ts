import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenContent',
})
export class ShortenContentPipe implements PipeTransform {
  transform(value: any): String {
    return value.length > 30
      ? value.slice(0, 30) + ' (...) Kliknij View aby dowiedzieć się więcej'
      : value;
  }
}
