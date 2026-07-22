import { Component } from '@angular/core';
import { CounterContainer } from './components/counter-container/counter-container';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}