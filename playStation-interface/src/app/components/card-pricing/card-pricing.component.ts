import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent {
  @Input()
  gameType: string = "Digital PS4"
  @Input()
  gamePricing: string = "R$ 129,99"

  constructor() { }
  
  ngOnInit(): void{

  }

}
