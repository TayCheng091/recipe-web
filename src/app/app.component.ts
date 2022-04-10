import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public selectedFeature:'recipe'|'shopping-list' = 'recipe' ;

  onSelected(feature:'recipe'|'shopping-list'){
    this.selectedFeature = feature;
  }
}
