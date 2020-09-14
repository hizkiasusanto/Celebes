import { Component, OnInit } from '@angular/core';
import {IngredientsService} from "../../services/ingredients.service";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.scss']
})
export class AddCategoryFormComponent implements OnInit {
  category: string = ""
  isSubmitting: boolean = false;

  constructor(private ingredientsService: IngredientsService,
              private dialogRef: MatDialogRef<AddCategoryFormComponent>,
              private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  submit() : void {
    this.isSubmitting = true;
    this.ingredientsService.addNewCategory(this.category).subscribe(res => {
      if (res.success) {
        this.snackBar.open("Category added successfully","",{panelClass:['success-snackbar']})
        this.dialogRef.close()
      } else {
        this.snackBar.open(res.msg,'',{panelClass:['error-snackbar']})
        this.isSubmitting = false;
      }
    })
  }
}
