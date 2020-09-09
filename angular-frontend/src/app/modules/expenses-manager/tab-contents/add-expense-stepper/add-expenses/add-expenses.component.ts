import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {UnitOfMeasurement} from "../../../../../shared/types/unit-of-measurement";
import {PriceCalculatorService} from "../../../services/price-calculator.service";

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {
  @Input() addExpensesForm: FormGroup
  @Output() addRow = new EventEmitter
  @Output() deleteRow = new EventEmitter

  get unitsOfMeasurement(): Array<string> {
    return Object.values(UnitOfMeasurement)
  }

  constructor(private priceCalculatorService: PriceCalculatorService) {
  }

  ngOnInit(): void {
  }

  emitAddRow = () => this.addRow.emit(null)

  emitRemoveRow = (index: number) => this.deleteRow.emit(index)

  lastChanged: string;

  changeLastChanged = (controlName: string) : string => this.lastChanged = controlName;

  onAmountChange = (i: number): void =>
    this.priceCalculatorService.onAmountChange(this.addExpensesForm.controls.expenses['controls'][i], this.lastChanged)

  onPricePerUnitChange = (i: number): void =>
    this.priceCalculatorService.onPricePerUnitChange(this.addExpensesForm.controls.expenses['controls'][i], this.lastChanged)

  onTotalPriceChange = (i: number): void =>
    this.priceCalculatorService.onTotalPriceChange(this.addExpensesForm.controls.expenses['controls'][i], this.lastChanged)
}
