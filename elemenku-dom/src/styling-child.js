import { LitElement, html, css } from "lit";

class StylingChild extends LitElement {
    static styles = css`
    ::slotted(*) {
        font-family: 'Roboto', sans-serif;
    }

    ::slotted(div) {
    text-align: center;
    }

    div ::slotted(*) {
    color: red;
    }

    `;

    render() {
        return html`
        <slot></slot>
        <div>
            <slot name="one"></slot>
        </div>
        `;
    }
}

customElements.define('styling-child', StylingChild);
