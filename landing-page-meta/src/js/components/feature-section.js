import { LitElement, html, css } from 'lit';

export class FeatureSection extends LitElement {
  static styles = css`
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 2rem;
    }
    .feature-card {
      text-align: center;
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <section class="features">
        <div class="feature-card">
          <h3>Menu Seimbang</h3>
          <p>Dirancang oleh ahli gizi profesional</p>
        </div>
        <div class="feature-card">
          <h3>Konsultasi Online</h3>
          <p>Dukungan 24/7 dari tim ahli kami</p>
        </div>
        <div class="feature-card">
          <h3>Tracking Progress</h3>
          <p>Pantau perkembangan diet Anda</p>
        </div>
      </section>
    `;
  }
}

customElements.define('feature-section', FeatureSection);