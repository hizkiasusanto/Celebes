import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../types/ingredient";
import {DateOnly} from "../../../../shared/types/date";
import {IngredientsService} from "../../services/ingredients.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {AddIngredientsFormComponent} from "../add-ingredients-form/add-ingredients-form.component";

@Component({
  selector: 'app-ingredients-library',
  templateUrl: './ingredients-library.component.html',
  styleUrls: ['./ingredients-library.component.scss']
})
export class IngredientsLibraryComponent implements OnInit {
  isLoading: boolean = false;
  listOfIngredients: Ingredient[] = [
    {name:"Cabe",category:"Bumbu",lastPurchased:new DateOnly({date:25,month:5,year:2020})},
    {name:"Ayam",category:"Daging",lastPurchased:new DateOnly({date:25,month:7,year:2020})},
  ]

  constructor(private ingredientsService: IngredientsService,private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.ingredientsService.getAllIngredients().subscribe(res => {
      if (res.success) {
        this.listOfIngredients = res.ingredients
      } else {
        this.snackBar.open(res.msg,'',{panelClass:['error-snackbar']})
      }
      this.isLoading = false;
      }
    )
  }

  addNewIngredient = () : void => {
    this.dialog.open(AddIngredientsFormComponent)
  }

  addNewCategory = () : void => {
    console.log("Adding new category")
  }
}
