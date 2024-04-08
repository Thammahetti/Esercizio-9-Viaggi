import { Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListComponent,IntroductionComponent,NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Viaggi';
  pagina = "home";
  paginaNavbar(value:any){
    this.pagina = value;
  }
  
  
}
