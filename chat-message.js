var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let ChatMessage = class ChatMessage extends LitElement {
    constructor() {
        super(...arguments);
        this.message = {
            senderAvatar: '',
            senderDisplayName: '',
            createdOn: '',
            content: '',
            status: '',
            direction: ''
        };
    }
    render() {
        let avatar = html ``;
        if (this.message.senderAvatar) {
            avatar = html `<div class="avatar-container">
        <div class="avatar">
          ${this.message.senderAvatar}
        </div>
      </div>`;
        }
        return html `
    <div class="root ${this.message.direction}">
      ${avatar}
      <div class="message-container">
        <header>
          ${this.message.direction == 'incoming' ?
            html `
            <div class="sender-display-name">
              ${this.message.senderDisplayName}
            </div>
            ` :
            ''}
          
          <div class="created-on">
            ${this.message.createdOn}
          </div>
        </header>

        <div class="content">
          ${this.message.content}
        </div>
      </div>

      <div class="status">
        ${this.message.status}
      </div>

    </div>
    `;
    }
};
ChatMessage.styles = css `
    :host {
      display: flex;
    }

    .root{
      display: flex;
      align-items: center;      
      margin: 0.5rem 0;
    }

    .root.outgoing{
      margin-left: 20%;
      justify-content: flex-end;
    }

    .root.outgoing .message-container{
      background-color: lightblue;
    }

git     .root.incoming{
      margin-right: 20%;
    }

    .message-container{
      background-color: lightgoldenrodyellow;
    }
        
    .avatar-container{
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: purple;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;
    }

    header {
      display: flex;
    }

    .message-container{
      flex: 2;
      margin-right: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 5px;
    }

    .sender-display-name{
      margin-right: 0.75rem;
    }

    .created-on{
      color: grey;
    }

    .content{
      word-break: break-word;
    }

    
  `;
__decorate([
    property({ type: Object })
], ChatMessage.prototype, "message", void 0);
ChatMessage = __decorate([
    customElement('chat-message')
], ChatMessage);
export { ChatMessage };
//# sourceMappingURL=chat-message.js.map