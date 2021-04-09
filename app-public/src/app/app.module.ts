import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FrameworkComponent } from './framework/framework.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { DetailsComponent } from './details/details.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FrameworkComponent,
    HomePageComponent,
    AboutComponent,
    RecipeListComponent,
    CreateRecipeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'list',
        component: RecipeListComponent
      },
      {
        path: 'details/:recipeid',
        component: DetailsComponent
      },
      {
        path: 'new',
        component: CreateRecipeComponent
      },
      {
        path: 'edit/:recipeid',
        component: CreateRecipeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
