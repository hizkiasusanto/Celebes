import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../types/ingredient";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {DateOnly} from "../../../../shared/types/date";

@Component({
  selector: 'app-ingredients-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.scss']
})
export class IngredientsTableComponent implements OnInit {
  displayedColumns: string[] = ['name','lastPurchased']
  @Input() ingredients: Ingredient[]
  dataSource: MatTableDataSource<Ingredient>
  @ViewChild(MatSort, {static:true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Ingredient>()
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  ngOnChanges() {
    if (this.ingredients.length > 0) {
      let ingredients = this.ingredients.map(i => {return {...i,lastPurchased:i.lastPurchased? new DateOnly(i.lastPurchased) : null}})
      this.dataSource = new MatTableDataSource<Ingredient>(ingredients)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
