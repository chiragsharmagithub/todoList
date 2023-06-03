import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

//
import { TodolistService } from '../Services/todolist.service';
import { TodoList } from '../Models/todolist';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  TodoList: TodoList[] = [];
  taskNameFormControl = new FormControl("");
  taskDescFormControl = new FormControl("");
  taskName: string = "abcd";
  taskDesc: string = "1234";

  constructor(private todoService: TodolistService) {}

  ngOnInit(): void {
      this.todoService.getTodoList()
        .subscribe(data => {
          this.TodoList = data;
        })
  }

  onSubmit() {
    console.log("Task name = " + this.taskName);
    console.log("Task Description = " + this.taskDesc);
  }





}
