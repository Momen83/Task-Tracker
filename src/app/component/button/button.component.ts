import { Component , EventEmitter, Input, OnInit , Output } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent  implements OnInit{
  @Input() text: string = "Click Here";
  @Input() color: string = "black";
  @Output() btnClick = new EventEmitter()

  constructor()
  {

  }

  ngOnInit(): void{

  }

  onClick(){
     this.btnClick.emit();
  }

}
