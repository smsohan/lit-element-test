import { LitElement, TemplateResult } from 'lit-element';
export declare class ChatMessage extends LitElement {
    static styles: import("lit-element").CSSResult;
    message: {
        senderAvatar: string;
        senderDisplayName: string;
        createdOn: string;
        content: string;
        status: string;
        direction: string;
    };
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'chat-message': ChatMessage;
    }
}
//# sourceMappingURL=chat-message.d.ts.map