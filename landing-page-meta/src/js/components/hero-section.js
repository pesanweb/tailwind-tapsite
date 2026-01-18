import { LitElement, html, css } from 'lit';

export class HeroSection extends LitElement {
  static styles = css`
    .hero {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../../images/hero-bg.jpg');
      background-size: cover;
      color: white;
      text-align: center;
    }
  `;

  render() {
    return html`
      <section class="hero">
        <div class="hero-content">
          <h1>Diet Sehat untuk Hidup Lebih Baik</h1>
          <p>Mulai perjalanan menuju hidup sehat Anda hari ini</p>
          <button @click=${this._handleClick}>Mulai Sekarang</button>
        </div>
      </section>
    `;
  }

  _handleClick() {
    // Handle click event
        // Dispatch custom event ke parent
        this.dispatchEvent(new CustomEvent('mulai-sekarang', {
            bubbles: true,
            composed: true,
          }));
  }
}

customElements.define('hero-section', HeroSection);