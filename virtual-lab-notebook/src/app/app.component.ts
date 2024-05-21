import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutingProviders } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectListComponent } from './components/project-list/project-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, ProjectListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
    
  
})
export class AppComponent {
  title ='This Awesome Angular Project';
  welcomeMessage = '...this is cool'
}

