import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";  // Import CommonModule
import { Task } from '../../Task';
import { AddTaskComponent } from "../add-task/add-task.component";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
    tasks: Task[] = [];

    constructor(private taskService: TaskService){}

    ngOnInit() : void
    {
       this.taskService.getTask().subscribe((tasks)=>(this.tasks = tasks));
    }
    
    deleteTask(task : Task)
    {
      this.taskService.deleteTask(task).subscribe(()=>(this.tasks = this.tasks.filter(t=> t.id !== task.id)));
    
    }

    toggleReminder(task : Task)
    {
        task.reminder = !task.reminder;
        this.taskService.updateTaskReminder(task).subscribe();
    }

    addTask(task: Task)
    {
       this.taskService.addTask(task).subscribe(() =>this.tasks.push(task));
    }

   
}
