import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,  // Ensure it's a standalone component
  imports: [FormsModule, CommonModule],  // Import necessary modules
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newActivity: string = '';
  activeActivities: string[] = [];
  completedActivities: string[] = [];

  addActivity() {
    if (this.newActivity.trim()) {
      this.activeActivities.push(this.newActivity);
      this.newActivity = '';
    }
  }

  completeActivity(activity: string) {
    this.activeActivities = this.activeActivities.filter(a => a !== activity);
    this.completedActivities.push(activity);
  }

  deleteActivity(activity: string) {
    this.activeActivities = this.activeActivities.filter(a => a !== activity);
  }

  deleteCompletedActivity(activity: string) {
    this.completedActivities = this.completedActivities.filter(a => a !== activity);
  }
}
