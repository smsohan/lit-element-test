import { LitElement, html, customElement, property, css } from 'lit-element';
import './chat-message'

@customElement('chat-thread')
export class ChatThread extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    chat-message.outgoing{
      justify-content: flex-end;
    }
  `;

  @property({type: Array})
  messages = [];

  render() {
    return html`
      <div class="root">
        ${this.messages.map((m: any) => html`<chat-message class=${m.direction} .message=${m} />`)}
      </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'chat-thread': ChatThread;
  }
}
