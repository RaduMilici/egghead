import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  encapsulation: ViewEncapsulation.Native,
  template: `
      {{message}}
      <input type="text" 
        #myInput 
        [(ngModel)]="message"
        [ngClass]="{mousedown: isMousedown}"
        (mousedown)="isMousedown=true"
        (mouseup)="isMousedown=false"
        (mouseleave)="isMousedown=false"     
      >
      <button 
        class="white bg-black code"
        (click)="onClick(myInput.value, $event); update.emit({text:message});" 
        (mouseover)="onMouseOver(myInput.value, $event)"
      >
        Click me!
      </button>
  `,
  styles: [`
    .mousedown {
      border: 2px solid green; 
    }
    
    :host{
      display: flex;
      flex-direction: column;
    }

    *{
      font-family: monospace;
    }
    
    input:hover { 
      font-weight: bold;
      outline: none;
    }
    
    button {
      border: none;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  @Input() message = 'hello';
  @Input() url = 'http://i.imgur.com/lFmMbVW.gif';
  @Output() update = new EventEmitter();
  isMousedown;

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
