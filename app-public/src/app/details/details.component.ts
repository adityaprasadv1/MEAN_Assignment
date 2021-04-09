import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service'; 
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [RecipeServiceService]
})
export class DetailsComponent implements OnInit {

  constructor(private recipeService: RecipeServiceService, private router: Router, private route: ActivatedRoute) { }

  recipe: Recipe;
  pageContent = {
    name: "",
    type: "",
    info: "",
    ingredients: [],
    banners: {}
  };

  ngOnInit(): void {
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
  
  deleteRecipe(recipeid) {
    this.recipeService.deleteRecipe(recipeid);
  }

  updateRecipe(recipeid) {
    this.router.navigateByUrl('/edit/' + recipeid);
  }
}