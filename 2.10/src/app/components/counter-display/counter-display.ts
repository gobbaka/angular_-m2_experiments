import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css'
})
export class CounterDisplay {

  @Input() value = 0;

  @Output() increment = new EventEmitter<void>();

  @Output() decrement = new EventEmitter<void>();

}