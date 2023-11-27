import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterLink, RouterModule} from '@angular/router'
@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

@Input()
photoCover:string=""
@Input()
cardTitle: string=""
@Input()
cardDescriptions: string=""
@Input()
Id : string="0"



construtor(){

}
ngOnInit(): void{

}

}
