import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../types/ingredient";
import {DateOnly} from "../../../../shared/types/date";
import {IngredientsService} from "../../services/ingredients.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {AddIngredientsFormComponent} from "../add-ingredients-form/add-ingredients-form.component";
import {catchError, map} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-ingredients-library',
  templateUrl: './ingredients-library.component.html',
  styleUrls: ['./ingredients-library.component.scss']
})
export class IngredientsLibraryComponent implements OnInit {
  isLoading: boolean = false;
  listOfIngredients: Ingredient[]
  listOfCategories: string[]


  constructor(private ingredientsService: IngredientsService, private snackBar: MatSnackBar, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadIngredients();
    this.loadCategories();
  }

  loadIngredients = () : void => {
    this.ingredientsService.getAllIngredients().subscribe(res => {
        if (res.success) {
          this.listOfIngredients = res.ingredients.map(ingredient => <Ingredient>{
            name: ingredient.name,
            category: ingredient.category,
            lastPurchased: ingredient.lastPurchased ? new DateOnly(ingredient.lastPurchased) : null
          })
        } else {
          this.snackBar.open(res.msg, '', {panelClass: ['error-snackbar']})
        }
        this.isLoading = false;
      }
    )
  }

  loadCategories = () : void => {
    this.ingredientsService.getAllCategories().pipe(
      map(res => res.categories.map(c => c.name)),
      catchError(err => of(err)))
      .subscribe(categories => {
        this.listOfCategories = categories
      })
  }

  addNewIngredient = (): void => {
    let dialog = this.dialog.open(AddIngredientsFormComponent)
    dialog.afterClosed().subscribe(this.loadIngredients)
  }

  addNewCategory = (): void => {
    console.log("Adding new category")
  }
}
