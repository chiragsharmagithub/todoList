import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoList } from '../Models/todolist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  ApiEndpoint = "http://localhost:3000/todoList";
  constructor(private http: HttpClient) { }

  getTodoList(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(this.ApiEndpoint);
  }
}
