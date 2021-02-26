import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('chat-message')
export class ChatMessage extends LitElement {
  static styles = css`
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

  @property()
  senderDisplayName = '';

  @property()
  senderAvatar = '';

  @property()
  createdOn = '';

  @property()
  content = '';

  @property()
  status = '';

  render() {
    return html`
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

}

declare global {
  interface HTMLElementTagNameMap {
    'chat-message': ChatMessage;
  }
}
