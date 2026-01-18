import { LitElement, html, css } from 'lit';
import { sharedStyles } from './styles/shared-styles.js';
import './js/components/header-component.js';
import './js/components/hero-section.js';
import './js/components/feature-section.js';
import './js/components/testimonial-section.js';
import './js/components/footer-component.js';
import './js/components/form-section.js';
import './js/components/order-bump.js';
import './js/components/payment-instruction.js';
import './js/components/upsell-section.js';
import './js/components/downsell-section.js';
import './js/components/thanks-section.js';

import './js/components/landing-page.js';

class MainApp extends LitElement {

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        padding: 16px;
        color: var(--ddd-theme-default-link);
      }
    `,
  ];

  static properties = {
    showLandingPage: { type: Boolean },
  };

  constructor() {
    super();
    this.showLandingPage = false;
  }

  _showLandingPage() {
    this.showLandingPage = true;
  }


  render() {
    return html`
      <header-component></header-component>
  
      ${this.showLandingPage
        ? html`<landing-page-app></landing-page-app>`
        : html`<hero-section @mulai-sekarang=${this._showLandingPage}></hero-section>`
      }

      <feature-section></feature-section>
      <testimonial-section></testimonial-section>
      <footer-component></footer-component>


    `;
  }
}

customElements.define('main-app', MainApp);