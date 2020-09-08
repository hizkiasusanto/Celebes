import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-review',
  templateUrl: './form-review.component.html',
  styleUrls: ['./form-review.component.scss']
})
export class FormReviewComponent implements OnInit {
  @Input() addExpensesForm: FormGroup;
  @Input() imageToPreview: string | ArrayBuffer

  constructor() { }

  ngOnInit(): void {
  }

}
