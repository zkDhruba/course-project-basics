import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] =[
    new Ingredient('Apple', 10),
    new Ingredient('Tomatoes', 15)
  ];

  constructor (){}

  ngOnInit(): void {
    
  }
}
