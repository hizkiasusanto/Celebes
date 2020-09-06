import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PriceCalculatorService {

  constructor() {
  }

  onAmountChange = (form: FormGroup, lastChanged: string) => {
    if (lastChanged == 'amount') {
      if (form.value.pricePerUnit) {
        form.patchValue({'totalPrice': form.value.amount * form.value.pricePerUnit})
      } else if (form.value.totalPrice) {
        form.patchValue({'pricePerUnit': form.value.totalPrice / form.value.amount})
      }
    }
  }

  onPricePerUnitChange = (form: FormGroup, lastChanged: string) => {
    if (lastChanged === 'pricePerUnit') {
      form.patchValue({'totalPrice': form.value.pricePerUnit * form.value.amount})
    }
  }

  onTotalPriceChange = (form: FormGroup, lastChanged: string) => {
    if (lastChanged === 'totalPrice' && form.value.amount) {
      form.patchValue({'pricePerUnit': form.value.totalPrice / form.value.amount})
    }
  }
}
