import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  @Output("update")
  emitter: EventEmitter<number> = new EventEmitter<number>();

  @Input("value")
  value: number=0;

  updateValue(value: number) {
    this.emitter.emit(value);
  }
}
