import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  name:string = "charmander"
  attTypes:string[] = ['Fire','Rock']
  image:string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  constructor() { }

  ngOnInit(): void {
  }

}
