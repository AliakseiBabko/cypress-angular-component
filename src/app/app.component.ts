import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCheckboxModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cypress-angular-component';
}
