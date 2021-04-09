import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
  providers: [RecipeServiceService]
})

export class CreateRecipeComponent implements OnInit {
  public href: string = "";
  
  public recipe: Recipe = {
    _id: "",
    name: "",
    type: "",
    info: "",
    ingredients: [],
    banners: {
      isNewer: false,
      isFeatured: false
    }
  }

  constructor(private recipeService: RecipeServiceService, private route: ActivatedRoute, private router: Router) { }

  pageContent = {
    name: "",
    type: "",
    info: "",
    ingredients: [],
    banners: {}
  };

  ngOnInit(): void {
    this.href = this.router.url;
    if(this.href != "/new") {
      this.route.params.pipe(switchMap((params: Params) => {
        return this.recipeService.getSingleRecipe(params.recipeid);
      }))
      .subscribe((recipe: Recipe) => {
        this.recipe = recipe;
        this.pageContent.name = recipe.name;
        this.pageContent.type = recipe.type;
        this.pageContent.info = recipe.info;
        this.pageContent.ingredients = recipe.ingredients;
        this.pageContent.banners = recipe.banners;
      });
    }
  }

  public createEditRecipe(recipe: Recipe): void {
    if (this.href != "/new") {
      this.recipeService.updateRecipe(recipe);
    } else {
      this.recipeService.createRecipe(recipe);
    }
  }
}
