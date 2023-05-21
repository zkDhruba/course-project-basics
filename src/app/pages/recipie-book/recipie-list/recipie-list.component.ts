import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie/recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit{

  recipies:Recipie[] = [
    new Recipie('Test Recipie', 'This is a test','https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    new Recipie('Test Recipie', 'This is also a test','https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  ];

  constructor(){}

  ngOnInit(): void {
    
  }

}
