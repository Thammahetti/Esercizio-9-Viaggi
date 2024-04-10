import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  persone = [
  {destinazione: "Marte",sistemaSolare: "Sistema solare",durataViaggio: 0.5 - 2, spazioportoPartenza: "Terra (SpaceX Starship)",dataPartenza: "2024 (previsto)",dataArrivo: "2025 (previsto)",costoBiglietto: 500000, immagine: "https://it.wikipedia.org/wiki/Marte_%28astronomia%29",}
  
 
]
}
