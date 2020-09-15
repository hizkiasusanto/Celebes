import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../types/ingredient";
import {IngredientsService} from "../../services/ingredients.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {AddIngredientsFormComponent} from "../add-ingredients-form/add-ingredients-form.component";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {AddCategoryFormComponent} from "../add-category-form/add-category-form.component";

interface CategorizedIngredients {
  category: string
  listOfIngredients: Ingredient[]
}

@Component({
  selector: 'app-ingredients-library',
  templateUrl: './ingredients-library.component.html',
  styleUrls: ['./ingredients-library.component.scss']
})
export class IngredientsLibraryComponent implements OnInit {
  isLoading: boolean = false;
  displayedColumns = ['name', 'lastPurchased']
  categorizedIngredients: { category: string, listOfIngredients: Ingredient[] }[] = []

  constructor(private ingredientsService: IngredientsService, private snackBar: MatSnackBar, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadCategorizedIngredients();
  }

  loadIngredients = (): void => {
    this.ingredientsService.getAllIngredients().subscribe(res => {
        if (res.success) {
          this.categorizedIngredients.map(c => c.listOfIngredients = res.ingredients.filter((i:Ingredient) => i.category === c.category))
        } else {
          this.snackBar.open(res.msg, '', {panelClass: ['error-snackbar']})
        }
        this.isLoading = false;
      }
    )
  }

  loadCategorizedIngredients = (): void => {
    this.isLoading = true
    this.ingredientsService.getAllCategories().pipe(
      map(res => res.categories.map(c => c.name)),
      catchError(err => of(err)),
      mergeMap(c => of(c.map(cname => <CategorizedIngredients>{category: cname, listOfIngredients: []}))))
      .subscribe(categories => {
        this.categorizedIngredients = categories
        this.loadIngredients()
      })
  }

  addNewIngredient = (): void => {
    let dialog = this.dialog.open(AddIngredientsFormComponent)
    dialog.afterClosed().subscribe(this.loadCategorizedIngredients)
  }

  addNewCategory = (): void => {
    let dialog = this.dialog.open(AddCategoryFormComponent)
    dialog.afterClosed().subscribe(this.loadCategorizedIngredients)
  }
}
