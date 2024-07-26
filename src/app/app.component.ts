import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {ThirdComponent} from "./third/third.component";
import {SecondComponent} from "./second/second.component";
import {FourthComponent} from "./fourth/fourth.component";
import {PercentPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, ThirdComponent, SecondComponent, FourthComponent, PercentPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bindings-example';
  firstInput: number = 0;
  secondInput: number = 0;
  thirdInput: number=0;
}
