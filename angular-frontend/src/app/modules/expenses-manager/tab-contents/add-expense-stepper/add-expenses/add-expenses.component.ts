import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {UnitOfMeasurement} from "../../../../../shared/types/unit-of-measurement";

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

  constructor() {
  }

  ngOnInit(): void {
  }

  emitAddRow = () => this.addRow.emit(null)


  emitRemoveRow = (index: number) => this.deleteRow.emit(index)
}
