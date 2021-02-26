import { LitElement } from 'lit-element';
export declare class ChatMessage extends LitElement {
    static styles: import("lit-element").CSSResult;
    senderDisplayName: string;
    senderAvatar: string;
    createdOn: string;
    content: string;
    status: string;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'chat-message': ChatMessage;
    }
}
//# sourceMappingURL=chat-message.d.ts.map