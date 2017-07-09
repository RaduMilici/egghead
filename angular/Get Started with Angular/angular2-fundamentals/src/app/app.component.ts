import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    app-simple-form {
      margin-bottom: 10px;
    }
  `]
})
export class AppComponent {

  title = 'lets get started!';

  constructor(
    public mail: MailService,
    @Inject('mail2') private mail2,
    @Inject('api') private api
  ) {

  }

  onUpdate(id, event) {
    console.log('onUpdate', id, event);
    this.mail.update(id, event.text);
  }

}
