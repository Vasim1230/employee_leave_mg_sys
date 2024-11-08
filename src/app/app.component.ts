import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeaveRequestComponent } from './components/leave-request/leave-request.component';
import { LeaveListComponent } from './components/leave-list/leave-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LeaveRequestComponent,LeaveListComponent,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
