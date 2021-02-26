var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import './chat-message';
let ChatThread = class ChatThread extends LitElement {
    constructor() {
        super(...arguments);
        this.messages = [];
    }
    render() {
        return html `
      <div class="root">
        ${this.messages.map((m) => html `<chat-message class=${m.direction} .message=${m} />`)}
      </div>
    `;
    }
};
ChatThread.styles = css `
    :host {
      display: block;
      width: 100%;
    }
    chat-message.outgoing{
      justify-content: flex-end;
    }
  `;
__decorate([
    property({ type: Array })
], ChatThread.prototype, "messages", void 0);
ChatThread = __decorate([
    customElement('chat-thread')
], ChatThread);
export { ChatThread };
//# sourceMappingURL=chat-thread.js.map