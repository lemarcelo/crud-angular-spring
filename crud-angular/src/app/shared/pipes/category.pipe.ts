import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      // Define qual ícone vai ser utilizado conforme o course.category
      case 'front-end': return'code';
      case 'back-end': return 'computer';
    }
    return 'code';
  }

}
