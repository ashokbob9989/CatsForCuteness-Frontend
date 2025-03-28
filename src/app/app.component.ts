import { Component } from '@angular/core';
import { HelloCatComponent } from "./components/hello-cat/hello-cat.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloCatComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cats-for-cuteness';
}
