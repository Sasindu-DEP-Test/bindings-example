import {Component, EventEmitter, Output} from '@angular/core';

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

  updateValue(value: number) {
    this.emitter.emit(value);
  }
}
