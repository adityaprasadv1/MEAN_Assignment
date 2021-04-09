import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]

  constructor(private movieService: RecipeServiceService) { }

  ngOnInit(): void {
    this.movieService.getRecipes()
      .then((recipes: Recipe[]) => {
        this.recipes = recipes.map(recipe => {
          return recipe;
        });
      });
  }
}
