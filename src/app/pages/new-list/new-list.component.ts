import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.scss'
})
export class NewListComponent {

  constructor(private taskService: TaskService, private router: Router){}

  createNewList(title: string){
    this.taskService.createList(title).subscribe((list) =>{
      this.router.navigateByUrl(`/lists/${list?.['_id']}`)
    })
  }

}
