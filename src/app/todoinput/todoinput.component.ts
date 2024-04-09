import { Component, EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrl: './todoinput.component.css'
})
export class TodoinputComponent {

   input:string = '';

   @Output() taskdata = new EventEmitter<string>();

   sendData(){
    this.taskdata.emit(this.input);
    this.input = '';
   }
  
}
