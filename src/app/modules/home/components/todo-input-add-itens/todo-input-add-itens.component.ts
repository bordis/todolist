import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.css']
})
export class TodoInputAddItensComponent {

  @Output() public emitTask = new EventEmitter();

  public newTask: string = '';

  public submitTask(){
    this.newTask = this.newTask.trim()
    if(this.newTask){
      this.emitTask.emit(this.newTask)
      this.newTask = ''
    }
  }

}
