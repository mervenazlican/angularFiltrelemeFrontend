import { Pipe, PipeTransform } from '@angular/core';
import { Projeler } from '../projeler';

@Pipe({
  name: 'sorgulaFilter'
})
export class SorgulaFilterPipe implements PipeTransform {

  transform(value: Projeler[], filterText?: string): Projeler[] {
    if(!filterText){
      return value;
    }else{
      return value.filter(function (item: any) {
        for(let property in item) {
          if(item[property] === null) {
            continue;
          }
          if(item[property].toString().toLocaleLowerCase().includes(filterText)) {
            return true;
          }
        }
        return false;
      });
    }
  }

}
