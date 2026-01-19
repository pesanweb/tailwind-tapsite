import { LitElement, html,css } from "lit";

class MyElement extends LitElement {
    static styles = css`
    :host {
        font-family: sans-serif;
    }

    h1 {
        color: #3B68FA;
        text-align: center;
    }
    :host(.blue) {
        background-color: aqua;
    }
    `;
    
    render() {
        return html`
        <div>
            <slot></slot>
        </div>
        <button @click=${this._getSlottedChildren}>Get Element</button>
Lit Component
Belajar styling pada shadow Dom
        `;
    }

    _getSlottedChildren() {
        const slot=this.shadowRoot.querySelector('slot');
        console.log(slot.assignedElements());
      }
}

customElements.define('my-dom', MyElement);