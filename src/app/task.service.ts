import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  createList(title: string){
    // we want to send a web request to create a list
    return this.webRequestService.post('lists', {title})
  };

  createTask(title: string, listId: string){
    // we want to send a web request to create a task
    return this.webRequestService.post(`lists/${listId}/tasks`, {title})
  };

  getLists(){
    return this.webRequestService.get('lists');
  };

  getTasks(listId){
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }
}
