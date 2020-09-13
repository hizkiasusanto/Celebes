import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../types/ingredient";
import {DateOnly} from "../../../../shared/types/date";

@Component({
  selector: 'app-ingredients-library',
  templateUrl: './ingredients-library.component.html',
  styleUrls: ['./ingredients-library.component.scss']
})
export class IngredientsLibraryComponent implements OnInit {
  listOfIngredients: Ingredient[] = [
    {name:"Cabe",category:"Bumbu",lastPurchased:new DateOnly({date:25,month:5,year:2020})},
    {name:"Ayam",category:"Daging",lastPurchased:new DateOnly({date:25,month:7,year:2020})},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addNewIngredient = () : void => {
    console.log("Adding new ingredient")
  }

  addNewCategory = () : void => {
    console.log("Adding new category")
  }
}
