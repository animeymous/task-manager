import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent implements OnInit{

  constructor(private taskService: TaskService){}
  
  ngOnInit(): void {
  
  };

  createNewList(){
    this.taskService.createList('Testing').subscribe(res =>{
      console.log(res)
    })
  }
}
