import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{message}}
      <br>
      <input #myInput [(ngModel)]="message" type="text">
      <button 
        (click)="onClick(myInput.value, $event); update.emit({text:message});" 
        (mouseover)="onMouseOver(myInput.value, $event)"
      >
        Click me!
      </button>
    </div> 
    <hr>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message = 'hello';
  @Input() url = 'http://i.imgur.com/lFmMbVW.gif';
  @Output() update = new EventEmitter();

  constructor() {
    setInterval(() => this.message = Math.random().toString(), 5000);
  }

  ngOnInit() {
  }

  onClick(value, event) {
    console.log('onClick', value, event);
  }

  onMouseOver(value, event) {
    console.log('onMouseOver', value, event);
  }

}
