import { Component, Input, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta-component',
  templateUrl: './heroe-tarjeta-component.component.html',
  styles: [`
  mat-card {
    margin-top: 20px;
  }
`]
})
export class HeroeTarjetaComponentComponent implements OnInit {

  @Input() heroe!: Heroe;

  constructor() {}

  ngOnInit(): void {
  }

}
