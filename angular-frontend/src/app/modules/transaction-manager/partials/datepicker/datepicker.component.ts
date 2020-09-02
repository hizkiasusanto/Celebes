import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DateService} from "../../../../shared/services/date.service";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Output() startDateEmitter = new EventEmitter<Date>();
  @Output() endDateEmitter = new EventEmitter<Date>();

  today = this.timeService.today();
  lastWeek = this.timeService.addDays(this.today, -7);
  lastMonth = this.timeService.addDays(this.today, -30);

  datePickerForm: FormGroup = this.formBuilder.group({
    mode: ['week'],
    startDate: [{value:this.lastWeek,disabled:true}],
    endDate: [{value:this.today,disabled:true}]
  });

  constructor(private formBuilder: FormBuilder, private timeService: DateService) {

  }

  ngOnInit(): void {
    this.emitStartDateInput();
    this.emitEndDateInput();
  }

  updateDateRangeAndToggleFormDisable() {
    switch (this.datePickerForm.get('mode').value) {
      case 'week':
        this.datePickerForm.patchValue({startDate: this.lastWeek, endDate: this.today});
        this.datePickerForm.controls.startDate.disable()
        this.datePickerForm.controls.endDate.disable();
        break;
      case 'month':
        this.datePickerForm.patchValue({startDate: this.lastMonth, endDate: this.today});
        this.datePickerForm.controls.startDate.disable();
        this.datePickerForm.controls.endDate.disable();
        break;
      case 'custom':
        this.datePickerForm.controls.startDate.enable();
        this.datePickerForm.controls.endDate.enable();
        break;
    }
  }

  emitStartDateInput = () => {
    this.startDateEmitter.emit(this.datePickerForm.get('startDate').value);
  }

  emitEndDateInput = () => {
    this.endDateEmitter.emit(this.datePickerForm.get('endDate').value);
  }
}
