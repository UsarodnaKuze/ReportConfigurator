import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isValue'
})
export class IsValuePipe implements PipeTransform {

  transform(value: HTMLCollection, args?: any): any {
    const valueList: Element[] = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i].localName === 'value') {
        valueList.push(value[i]);
      }
    }
    return valueList;
  }

}
