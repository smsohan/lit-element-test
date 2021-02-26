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
        this.senderDisplayName = '';
        this.senderAvatar = '';
        this.createdOn = '';
        this.content = '';
        this.status = '';
    }
    render() {
        return html `
    <div class="root">
      <div class="avatar-container">
        <div class="avatar">
          ${this.senderAvatar}
        </div>
      </div>

      <div class="message-container">
        <header>
          <div class="sender-display-name">
            ${this.senderDisplayName}
          </div>
          <div class="created-on">
            ${this.createdOn}
          </div>
        </header>

        <div class="content">
          ${this.content}
        </div>
      </div>

      <div class="status">
        ${this.status}
      </div>

    </div>
    `;
    }
};
ChatMessage.styles = css `
    :host {
      display: block;
      width: 100%;
    }

    .root{
      display: flex;
      align-items: center;
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
    }

    .sender-display-name{
      margin-right: 0.75rem;
    }

    .created-on{
      color: grey;
    }
    
  `;
__decorate([
    property()
], ChatMessage.prototype, "senderDisplayName", void 0);
__decorate([
    property()
], ChatMessage.prototype, "senderAvatar", void 0);
__decorate([
    property()
], ChatMessage.prototype, "createdOn", void 0);
__decorate([
    property()
], ChatMessage.prototype, "content", void 0);
__decorate([
    property()
], ChatMessage.prototype, "status", void 0);
ChatMessage = __decorate([
    customElement('chat-message')
], ChatMessage);
export { ChatMessage };
//# sourceMappingURL=chat-message.js.map