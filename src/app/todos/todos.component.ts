import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  
  todos: { 
    "task":string;
    "isCompleted":boolean;
    "isEditable":boolean;
   }[] = [];
  
  addTask(taskdata:string){
    this.todos.push({task:taskdata,isCompleted:false,isEditable:false});
  }

  editTask(emitedvalue:any)
  {
    this.todos[emitedvalue.index].task = emitedvalue.value;
    this.todos[emitedvalue.index].isEditable = false;
    
  }

  completeTask(emitedvalue:any){
    this.todos[emitedvalue.index].isCompleted = emitedvalue.value;
    console.log(this.todos[emitedvalue.index]);
  }

  deleteTask(emitedvalue:any)
  {
    this.todos.splice(emitedvalue,1);
  }

}
