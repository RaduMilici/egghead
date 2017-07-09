import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  message = `You've got mail!`;
  unreadMessages: {id: number, text: string}[] = [
    {id: 0, text: `hello test 1`},
    {id: 1, text: `test hello 2`},
    {id: 2, text: `test test 3`},
    {id: 3, text: `hello test 1`}
  ];

  constructor() { }

  update(id, text) {
    this.unreadMessages = this.unreadMessages.map(m => {
      if (m.id === id) {
        return {id, text};
      } else {
        return m;
      }
    });
  }

}
