import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

export function BarcodeValidator(control: AbstractControl): ValidationErrors | null {
    if (!parseInt(control.value, 10)) {
        return {
            barcode: {
                valid: false,
                message: 'Barcode should be a number.'
            }
        };
    }
    return null;
}

@Directive({
    selector: '[appBarcodeValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: BarcodeValidatorDirective, multi: true }]
})
export class BarcodeValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return BarcodeValidator(control);
    }
}
