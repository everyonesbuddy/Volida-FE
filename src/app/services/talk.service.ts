import { Injectable } from '@angular/core';
import Talk from 'talkjs';

@Injectable({
  providedIn: 'root'
})
export class TalkService {
  private currentUser: Talk.User | any;

  constructor() {}

  async createUser(applicationUser: any) {
    await Talk.ready;
    return new Talk.User({
      id: applicationUser.id,
      name: applicationUser.username,
      role: applicationUser.role
    });
  }

  async createCurrentSession() {
    await Talk.ready;
    const user = {
      id: 1,
      username: 'Volida',
      email: 'info@volida.io',
      role: 'default'
    };
    this.currentUser = await this.createUser(user);
    const session = new Talk.Session({
         appId: 'XMnpNaGd',
         me: this.currentUser
    });
    return session;
  }

  async createInbox(session: Talk.Session) {
    const conversation = session.getOrCreateConversation('my_conversation_id');
    conversation.setAttributes({
      photoUrl: "https://demo.talkjs.com/img/11.jpg",
      subject: "Stream Chat"
  });
    const inbox = session.createChatbox({
        showChatHeader: true,
    });
    inbox.select(conversation, { asGuest: true });
    return inbox;
 }
}