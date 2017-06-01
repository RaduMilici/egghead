import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  message: string = `You've got mail!`;
  unreadMessages: {}[] = [
    {id: 0, text: `hello test 1`},
    {id: 1, text: `test hello 2`},
    {id: 2, text: `test test 3`},
    {id: 3, text: `hello test 1`}
  ];

  constructor() { }

}
