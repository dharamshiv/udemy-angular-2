import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
    selector:'app-recepies',
    templateUrl:'./recipes.component.html',
    styleUrls:['./recipes.component.css']
})
export class RecipesComponent{
    
    selectedRecipe:Recipe;
    
    
    
}

