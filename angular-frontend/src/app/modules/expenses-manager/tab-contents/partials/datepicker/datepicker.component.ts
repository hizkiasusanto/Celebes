import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DateService} from "../../../../../shared/services/date.service";
import {DatepickerMode} from "./datepicker-mode";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Output() startDateEmitter = new EventEmitter<Date>();
  @Output() endDateEmitter = new EventEmitter<Date>();

  today: Date = this.dateService.today();
  lastWeek: Date = this.dateService.addDays(this.today, -7);
  lastMonth: Date = this.dateService.addDays(this.today, -30);

  datePickerForm: FormGroup = this.formBuilder.group({
    mode: [DatepickerMode.ThisWeek],
    startDate: [{value:this.lastWeek,disabled:true}],
    endDate: [{value:this.today,disabled:true}]
  });

  public get datepickerMode(): typeof DatepickerMode {
    return DatepickerMode;
  }

  constructor(private formBuilder: FormBuilder, private dateService: DateService) {}

  ngOnInit(): void {
    this.emitStartDateInput();
    this.emitEndDateInput();
  }

  updateDateRangeAndToggleFormDisable() : void {
    switch (this.datePickerForm.get('mode').value) {
      case DatepickerMode.ThisWeek:
        this.datePickerForm.patchValue({startDate: this.lastWeek, endDate: this.today});
        this.datePickerForm.controls.startDate.disable()
        this.datePickerForm.controls.endDate.disable();
        break;
      case DatepickerMode.ThisMonth:
        this.datePickerForm.patchValue({startDate: this.lastMonth, endDate: this.today});
        this.datePickerForm.controls.startDate.disable();
        this.datePickerForm.controls.endDate.disable();
        break;
      case DatepickerMode.Custom:
        this.datePickerForm.controls.startDate.enable();
        this.datePickerForm.controls.endDate.enable();
        break;
    }
  }

  emitStartDateInput = () : void => {
    this.startDateEmitter.emit(this.datePickerForm.get('startDate').value);
  }

  emitEndDateInput = () : void => {
    this.endDateEmitter.emit(this.datePickerForm.get('endDate').value);
  }
}
