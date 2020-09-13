import { Component, OnInit } from '@angular/core';
import {IngredientsService} from "../../services/ingredients.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingredient} from "../../types/ingredient";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-ingredients-form',
  templateUrl: './add-ingredients-form.component.html',
  styleUrls: ['./add-ingredients-form.component.scss']
})
export class AddIngredientsFormComponent implements OnInit {
  addIngredientsForm = new FormGroup({
    "name": new FormControl('',Validators.required),
    "category": new FormControl('',Validators.required)
  })
  isSubmitting: boolean = false;

  constructor(private ingredientsService: IngredientsService, private dialogRef: MatDialogRef<AddIngredientsFormComponent>, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit() : void {
    this.isSubmitting = true;
    this.ingredientsService.addNewIngredient(<Ingredient>this.addIngredientsForm.value).subscribe(res => {
      if (res.success) {
        this.snackBar.open("Ingredient added successfully", '',{panelClass:['success-snackbar']})
        this.isSubmitting = false;
        this.dialogRef.close()
      } else {
        this.snackBar.open(res.msg,'',{panelClass:['error-snackbar']})
        this.isSubmitting = false;
      }
    })
  }
}
