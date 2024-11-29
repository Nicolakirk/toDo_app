import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text: string = ''; // Button text
  @Input() backgroundColor: string = ''; // Background color
  @Input() status: string = ''; // The current status (e.g., 'to do', 'doing',
  @Input() color: string = '';
  @Output() statusChange: EventEmitter<string> = new EventEmitter<string>(); // Emit status change


  getButtonLabel(): string {
    console.log(this.status)
    switch (this.status){
      case 'to do':
        return 'Start Task';
      case 'doing':
        return 'Complete Task';
        case 'done':
          return "Reopen Task";
          default:
            return 'Unknown Status';
    }
  }
  getButtonClass(): string {
    switch(this.status) {
      case 'to do':
        return 'btn-to-do';
        case 'doing':
          return 'btn-done';
          default:
        return 'btn-default';

    }
  }
  onClick(): void  {
    if(this.status === "to do"){
      this.statusChange.emit("doing");

    }else if (this.status === "doing"){
      this.statusChange.emit('done');
    }else if(this.status === "done"){
      this.statusChange.emit("to do")
    }

  }

}


