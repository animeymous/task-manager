import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';
import { WebRequestService } from './web-request.service';
import { BrowserModule } from '@angular/platform-browser';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'lists',
        pathMatch: 'full'
    },
    {
        path: 'new-list',
        component: NewListComponent
    },
    {
        path: 'lists',
        component: TaskViewComponent
    },
    {
        path: 'lists/:listId',
        component: TaskViewComponent
    },
    {
        path: 'lists/:listId/new-task',
        component: NewTaskComponent
    },
]

// @NgModule({
//     imports: [
//         RouterModule.forRoot(routes),
//         HttpClientModule,
//         BrowserModule,
//         RouterModule,
//         NewListComponent
//     ],
//     exports: [RouterModule],
//     providers: [TaskService, WebRequestService],
//     schemas: [CUSTOM_ELEMENTS_SCHEMA],
// })

export class AppRoutes {};
