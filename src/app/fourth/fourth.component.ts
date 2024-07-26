import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-fourth',
  standalone: true,
  imports: [],
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.css'
})
export class FourthComponent {
  @Input("value")
  radius: number = 30;

}
