import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterDisplay } from '../counter-display/counter-display';
import { CounterStore } from '../../services/counter-store';

@Component({
  selector: 'app-counter-container',
  standalone: true,
  imports: [CommonModule, CounterDisplay],
  templateUrl: './counter-container.html',
  styleUrl: './counter-container.css'
})
export class CounterContainer {

  constructor(public store: CounterStore) {}

}