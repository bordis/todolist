import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> =
    JSON.parse(localStorage.getItem("list") || '[]');

  constructor() {

  }

  ngOnInit(): void {
  }

  public deleteTask(event: number) {
    this.taskList.splice(event, 1)
  }

  public deleteAll() {
    const confirm = window.confirm("tem certeza?")
    if (confirm)
      this.taskList = []
  }

  public setEmitTask(event: string) {
    this.taskList.push({ task: event, checked: false })
  }

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task vazio, deseja deletar?")
      if (confirm) {
        this.deleteTask(index)
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }

}
