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
    {destinazione: "Proxima Centauri c",sistema: "Proxima Centauri",durata: "4,2 Anni",distanza: "4.2 anni luce", partenza: "Terra ",spazioPorti:"Kennedy Space Center",dataPartenza: new Date().getTime(),dataArrivo: new Date().getTime() + (4.2 * 365.25 * 24 * 60 * 60 * 1000),costo: 10000000, immagine: "../../assets/proxima-c.png"},
  {destinazione: "Marte",sistema: "Sistema solare",durata: "4 Minuti",distanza: "1.83 × 10^(-4) anni luce", partenza: "Terra ",spazioPorti:"Kennedy Space Center",dataPartenza: new Date().getTime(),dataArrivo: new Date().getTime() + (4 * 60 * 1000),costo: 500000, immagine: "../../assets/marte.png"},
  {destinazione: "Proxima Centauri b",sistema: "Proxima Centauri",durata: "4,2 Anni ",distanza: "4.2 anni luce", partenza: "Terra ",spazioPorti:"Kennedy Space Center",dataPartenza: new Date().getTime(),dataArrivo: new Date().getTime() + (4.2 * 365.25 * 24 * 60 * 60 * 1000),costo: 10220000, immagine: "../../assets/proxima-b.png"},
  {destinazione: "Kepler-186f",sistema: "Kepler-186",durata: "557 Anni ",distanza: "557 anni luce", partenza: "Terra ",spazioPorti:"Kennedy Space Center",dataPartenza: new Date().getTime(),dataArrivo: new Date().getTime() + (557 * 365.25 * 24 * 60 * 60 * 1000),costo: 12300000, immagine: "../../assets/Kepler-186f.png"},
  {destinazione: "TRAPPIST-1e",sistema: "TRAPPIST-1",durata: "40 Anni",distanza: "40 anni luce", partenza: "Terra ",spazioPorti:"Kennedy Space Center",dataPartenza: new Date().getTime(),dataArrivo: new Date().getTime() + (40 * 365.25 * 24 * 60 * 60 * 1000),costo: 11200000, immagine: "../../assets/Trappist.png"},
]
}
