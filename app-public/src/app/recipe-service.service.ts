import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  private recipesUrl = 'http://localhost:3000/api/recipes';

  constructor(private http: HttpClient, private router: Router) { }

  getRecipes(): Promise<void | Recipe[]> {
    return this.http.get(this.recipesUrl).toPromise()
      .then(response => response as Recipe[])
      // .then(response => console.log(response))
      .catch(this.handleError);
  }

  getSingleRecipe(recipeId: string): Promise<void | Recipe> {
    return this.http.get(this.recipesUrl + '/' + recipeId)
      .toPromise()
      .then(response => response as Recipe)
      // .then(response => console.log(response))
      .catch(this.handleError);
  }

  createRecipe(recipe: Recipe): Promise<void | Recipe> {
    return this.http.post(this.recipesUrl, recipe)
      .toPromise()
      .then(response => {
        response as any;
        this.router.navigate(['list']);
      })
      // .then(response => console.log(response))
      .catch(this.handleError);
  }

  deleteRecipe(recipeId: string) {
    return this.http.delete(this.recipesUrl + '/' + recipeId)
    .toPromise()
      .then(response => {
        response as any;
        this.router.navigate(['list']);
      })
      // .then(response => console.log(response))
      .catch(this.handleError);
  };

  updateRecipe(recipe: Recipe): Promise<void | Recipe> {
    return this.http.put(this.recipesUrl + '/' + recipe._id, recipe)
      .toPromise()
      .then(response => {
        response as Recipe;
        this.router.navigate(['details/' + recipe._id]);
      })
      // .then(response => console.log(response))
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log("error");
  }
}
