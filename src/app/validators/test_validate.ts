import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
    selector: '[kiemtratuoi][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: KiemTraTuoiValidator, multi: true }
    ]
})

export class KiemTraTuoiValidator implements Validator {
    validate(c: FormControl): { [key: string]: any } {
        let value = c.value;

        if (value < 150) {
            return null;
        }

        return {
            kiemtratuoi: {
                valid: false
            }
        };
    }
}