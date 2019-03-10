import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(values: Map<any, any>, field: string, desc: boolean = true, args?: any): any {
    const fields = ['name', 'price', 'category', 'quantity'];
    const sort = (p1: any, p2: any) => {
      const sortNumbers = (a: number, b: number) => desc ? a - b : b - a;
      const pF1 = p1[0][field];
      const pF2 = p2[0][field];

      if (field === 'quantity') {
        return sortNumbers(p1[1], p2[1]);
      }

      if (field === 'price') {
        return sortNumbers(pF1, pF2);
      }

      return desc ? pF2.localeCompare(pF1) : pF1.localeCompare(pF2);
    };

    if (!fields.includes(field)) {
      return values;
    }

    return new Map(Array.from(values).sort((a, b) => sort(a, b)));
  }
}
