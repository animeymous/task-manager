import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent implements OnInit{

  lists: any = [];
  tasks: any = [];

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {

    this.taskService.getLists().subscribe((lists)=>{
      this.lists = lists;
    })

    this.activatedRoute.params.subscribe((params : Params)=>{
      this.taskService.getTasks(params?.['listId']).subscribe((tasks: any) =>{
        this.tasks = tasks;
      })
    });
  };
}
