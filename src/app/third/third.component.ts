import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {

  @Input("value")
  value: number = 20;

  @Output() update = new EventEmitter<unknown>();


  updateValue(valueAsNumber: number) {

  }
}
