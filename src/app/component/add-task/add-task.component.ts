import { Component , Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
    @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
    text:string = "To-Do";
    day: string = "1";
    reminder:boolean = false;
    showAddTask:boolean = false;
    subscription!:Subscription;


    constructor(private uiService:  UiService){
      this.subscription = this.uiService.onToggle().subscribe(value=> this.showAddTask = value);

    }
    onSubmit(){
        if (!this.text) {
            alert('Please add a task!');
            return;
          }
      
          const newTask: Task = {
            text: this.text,
            day: this.day,
            reminder: this.reminder,
          };
      
          this.onAddTask.emit(newTask);
      
          this.text = '';
          this.day = '';
          this.reminder = false;
        
    }
}
