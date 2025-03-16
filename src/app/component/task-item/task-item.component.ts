import { Component, Input , Output , EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  // ✅ Import this
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
      @Input() task!:Task;
      faTimes = faTimes;
      @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
      @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

      onDelete(task:Task){
         this.onDeleteTask.emit(task);
     }

     onToggle(task : Task)
     {
        this.onToggleReminder.emit(task);
     }
}
