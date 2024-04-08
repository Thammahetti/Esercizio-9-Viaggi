import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() paginaEvento = new EventEmitter<string>();
  pagina = "home";

  setPaginaHome(){
    this.pagina = "home";
    this.paginaEvento.emit(this.pagina);
  }
  setPaginaProdotti(){
    this.pagina = "biglietto";
    this.paginaEvento.emit(this.pagina);
  }
}
