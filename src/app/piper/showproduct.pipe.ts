import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'showProduct',
})
export class dateFormatPipe implements PipeTransform {
    transform(value: string) {}
}