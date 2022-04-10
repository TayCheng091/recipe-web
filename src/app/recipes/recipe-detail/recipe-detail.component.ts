import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit , DoCheck {

  @Input() recipe:Recipe ;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log("recipe in detail =",this.recipe);
  }

}
