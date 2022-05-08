import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenContent',
})
export class ShortenContentPipe implements PipeTransform {
  transform(value: any): String {
    return value.slice(0, 50);
  }
}
