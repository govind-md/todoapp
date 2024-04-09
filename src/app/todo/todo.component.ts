import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() _todo:any;
  @Input() index:number = 0;

  @Output() newTaskValue = new EventEmitter<any>();
  @Output() toggleComplete = new EventEmitter<any>();
  @Output() deleteTask = new EventEmitter<any>();

  toggle(toperform:string)
  {
    if(toperform === "edit")
    {
      this._todo.isEditable = true;
    }
    else if(toperform === "save")
      this.newTaskValue.emit({"value":this._todo.task,"index":this.index});

    else if(toperform === "complete")
      this.toggleComplete.emit({"value":this._todo.isCompleted,"index":this.index});

    else if(toperform === "delete")
      this.deleteTask.emit(this.index);


  }

  /* log(obj:object){
    console.log(obj);
  } */
}
