import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipes'
})
export class MypipesPipe implements PipeTransform {

  transform(items: any[], term): any {
    console.log('term', term);
    return term ?
      items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1)
      : items;
  }

}
