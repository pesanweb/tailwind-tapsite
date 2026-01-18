import { LitElement, html, css } from 'lit';

export class HeaderComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--ddd-theme-default-linkLight);
    }
  `;

  render() {
    return html`
      <header>
        <h1>Diet Sehat</h1>
        <nav>
          <!-- Navigation items -->
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);