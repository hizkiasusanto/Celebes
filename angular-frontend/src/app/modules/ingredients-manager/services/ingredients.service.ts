import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ingredient} from "../types/ingredient";
import {Observable} from "rxjs";
import {BackendResponse} from "../../../shared/types/backendresponse";
import {environment} from "../../../../environments/environment";

@Injectable({providedIn: 'root'})
export class IngredientsService {
  constructor(private httpClient: HttpClient) {
  }

  addNewIngredient = (ingredient: Ingredient): Observable<BackendResponse> => {
    return this.httpClient.post<BackendResponse>(`${environment.backendUrl}/ingredients/add-ingredient`, {
      name: ingredient.name,
      category: ingredient.category
    })
  }

  getAllIngredients = () : Observable<BackendResponse> => this.httpClient.get<BackendResponse>(`${environment.backendUrl}/ingredients/get-all-ingredients`)

}
