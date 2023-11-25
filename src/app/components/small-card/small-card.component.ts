import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
@Input()
  photoCover:string =""
@Input()
cardTitle: string=""

construtor(){

}
ngOnInit(): void{

}

}
