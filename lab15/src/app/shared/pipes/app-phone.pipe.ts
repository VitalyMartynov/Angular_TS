import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPhone'
})
export class AppPhonePipe implements PipeTransform {

  transform(phone: string): string {
    
    return "8("+phone.slice(0, 3)+") "+phone.slice(3, 6)+"-"+phone.slice(6);
  }

}