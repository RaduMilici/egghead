import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'lets get started!';

  constructor(
    private mail: MailService,
    @Inject('mail2') private mail2,
    @Inject('api') private api
  ) {

  }

  onUpdate(event) {
    console.log('onUpdate', event);
  }

}
