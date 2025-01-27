import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ActiveprojectsComponent } from './activeprojects/activeprojects.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, HomeComponent, FeedbackComponent, ContactComponent, ActiveprojectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cookie Dubs';
}
