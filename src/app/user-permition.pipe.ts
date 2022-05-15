import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPermition',
})
export class UserPermitionPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value == 1 ? 'Użytkownik' : 'Administrator';
  }
}
