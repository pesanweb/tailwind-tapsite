import { LitElement, html, css } from 'lit';

export class FooterComponent extends LitElement {
  static styles = css`
    footer {
      background: #333;
      color: white;
      padding: 2rem;
      text-align: center;
    }
  `;

  render() {
    return html`
      <footer>
        <p>&copy; 2024 Diet Sehat. All rights reserved.</p>
        <div class="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);