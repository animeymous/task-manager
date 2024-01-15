import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent implements OnInit{

  listId: any;

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute, private router : Router){}
  
  ngOnInit() {
    this.activatedRoute.params.subscribe((params : Params)=>{
      this.listId = params['listId'];
    });
  }

  createNewTask(title: string){
    this.taskService.createTask(title, this.listId).subscribe(res =>{
      this.router.navigate(['../'], {relativeTo: this.activatedRoute})
    });
  }

};

