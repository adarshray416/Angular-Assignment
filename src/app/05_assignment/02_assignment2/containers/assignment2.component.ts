import { Component, Input  } from '@angular/core';
import { Todo } from '../../assignment.component';
@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  
  @Input()
  GetValue: Todo;
  activeRow: number;
  activateRow(i: number): void {
     this.activeRow = i;
   }
}
