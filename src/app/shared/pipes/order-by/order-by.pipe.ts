import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform<T>(
    inputArray: T[],
    orderByProperty: string,
    isOrderByDeacreasing: boolean = true,
  ): T[] {
    if (!orderByProperty) return inputArray;
    const sortedArray: T[] = [...inputArray];

    if (typeof inputArray[0][orderByProperty] === 'number') {
      return sortedArray.sort((itemA: T, itemB: T) =>
        isOrderByDeacreasing
          ? itemA[orderByProperty] - itemB[orderByProperty]
          : itemB[orderByProperty] - itemA[orderByProperty],
      );
    }

    sortedArray.sort();
    if (!isOrderByDeacreasing) {
      sortedArray.reverse();
    }
    return sortedArray;
  }
}
