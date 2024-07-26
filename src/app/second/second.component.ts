import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  @Input("value")
  value: number = 20;

  @Output() update = new EventEmitter<unknown>();

  updateValue(valueAsNumber: number) {

  }
}
