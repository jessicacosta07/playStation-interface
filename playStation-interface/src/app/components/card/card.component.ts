import { Component, Input} from '@angular/core';
import { CardLabelComponent } from "../card-label/card-label.component";
import { CardPricingComponent } from "../card-pricing/card-pricing.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [CardLabelComponent, CardPricingComponent]
})
export class CardComponent {
    @Input()
    gameOver: string = ""
    @Input()
    gameLabel: string = ""
    @Input()
    gameType: string = "Digital PS4"
    @Input()
    gamePricing: string = "R$ 129,99"

    constructor() { }
    
    ngOnInit(): void{

    }
}
